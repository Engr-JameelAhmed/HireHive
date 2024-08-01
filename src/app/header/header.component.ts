import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  loginState: boolean;
  currentlyloggedRole: string;
  private loginStateSubscription: Subscription;
  private loginRoleSubscription: Subscription;

  constructor(
    private userService: UserServiceService

  ){}

  ngOnInit() {
    this.loginStateSubscription = this.userService.loginStateChanged.subscribe(
      loggedIn => {
        this.loginState = loggedIn;
        console.log('Login state updated:', this.loginState); // Log the value of loginState
      }
    );
    this.loginRoleSubscription = this.userService.loggedRole.subscribe(
      loggedIn => {
        this.currentlyloggedRole = loggedIn;
        console.log('Currently Login role :', this.currentlyloggedRole); // Log the value of loginState
      }
    );
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
    this.userService.logout();
  }





}
