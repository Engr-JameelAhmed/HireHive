import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Subscription } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';
import { LoginDataService } from '../services/login-data.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  loginState: boolean = false;
  currentlyloggedRole: string = 'visitor';

  private loginStateSubscription: Subscription;
  private loginRoleSubscription: Subscription;

  constructor(
    private userService: UserServiceService,
    private authService: AuthServiceService,
    private loginDataService: LoginDataService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.loginDataService.currentData.subscribe((data) => {
      debugger
      this.currentlyloggedRole = data.CurrentloggedRole;
    
      this.loginState = data.loggedIn;
      console.log('Role:', this.currentlyloggedRole);
      console.log('Logged In:', this.loginState);
    });
  }

  ngOnDestroy() {
    if (this.loginStateSubscription) {
      this.loginStateSubscription.unsubscribe();
    }
    if (this.loginRoleSubscription) {
      this.loginRoleSubscription.unsubscribe();
    }
  }

  logout() {
    localStorage.removeItem('accessToken');
    this.currentlyloggedRole = 'visitor';
    this.router.navigateByUrl('/'); // Navigate to the login page after logout
    this.messageService.add({
      severity: 'success',
      summary: 'Logout Successful',
      detail: 'Welcome back!',
    });
  }
}
