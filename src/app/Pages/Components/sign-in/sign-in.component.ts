import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

export interface loginData {
  email: string;
  password: string;
}




@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{
  values: string;
  loginObject: any = {
    email: '',
    password: ''
  }

  LoginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  constructor(
          private fb : FormBuilder,
          private router: Router,
          private userService: UserServiceService
        ){

  }

  ngOnInit(): void {

  }


   // or we can directly give access to the control in a method
   get email(){
    return this.LoginForm.controls['email'];
  }
  get password(){
    return this.LoginForm.controls['password'];
  }

  OnLogin(){
      this.userService.checkCredentials(this.email.value, this.password.value);
  }

}
