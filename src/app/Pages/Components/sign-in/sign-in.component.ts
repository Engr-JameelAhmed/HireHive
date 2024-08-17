import { Component, EventEmitter, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserResponse } from 'src/app/Models/User';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { LoginDataService } from 'src/app/services/login-data.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { UtilServiceService } from 'src/app/services/util-service.service';

export interface loginData {
  email: string;
  password: string;
}
export interface JwtToken {
  accessToken: string;
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  values: string;
  CuurentloggedRole: string;
  loggedIn: boolean;
  // loginStateChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  // loggedRole: EventEmitter<string> = new EventEmitter<string>();

  authService: AuthServiceService = inject(AuthServiceService);
  utilService: UtilServiceService = inject(UtilServiceService);
  loginDataService: LoginDataService = inject(LoginDataService);

  loginObject: any = {
    email: '',
    password: '',
  };
  LoginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserServiceService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {}
  // or we can directly give access to the control in a method
  get email() {
    return this.LoginForm.controls['email'];
  }
  get password() {
    return this.LoginForm.controls['password'];
  }

  OnLogin() {
  this.loginObject.email = this.email.value;
  this.loginObject.password = this.password.value;
  let user: UserResponse = {
    email: this.loginObject.email,
    password: this.loginObject.password,
  };
  this.authService.login(user).subscribe(
    (response: JwtToken) => {
      var token = response.accessToken;
      console.log(response);
      localStorage.setItem('accessToken', token);
      if (token) {
        var a = this.parseJwt(token);
        const roles = a.ROLES;
        this.CuurentloggedRole = roles[0];
        
        // Update the logged in state
        this.loggedIn = true;
        
        // Call sendData to update the header
        this.sendData();

        this.messageService.add({
          severity: 'success',
          summary: 'Login Successful',
          detail: 'Welcome back!',
        });
        if (roles[0] === 'ROLE_EMPLOYEE') {
          this.router.navigateByUrl('employeeHome');
        } else if (roles[0] === 'ROLE_EMPLOYER') {
          this.router.navigateByUrl('employerHome');
        } else if (roles[0] === 'ROLE_INVESTOR') {
          this.router.navigateByUrl('investorHome');
        } else if (roles[0] === 'ROLE_BUSINESSOWNER') {
          this.router.navigateByUrl('business-owner-Home');
        } else {
          console.log('User Not Found');
        }
      } else {
        console.log('Token not found');
      }
      console.log(token);
    },
    (error) => {
      console.error('Login failed. Please check your credentials.', error);
      this.messageService.add({
        severity: 'error',
        summary: 'Login Failed',
        detail: 'Please check your credentials and try again.',
      });
    }
  );
}
  parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  }
  sendData() {
    const data = {
      CurrentloggedRole: this.CuurentloggedRole,
      loggedIn: this.loggedIn
    };
    this.loginDataService.changeData(data);
  }
}
