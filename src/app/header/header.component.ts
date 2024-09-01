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
import { UtilServiceService } from '../services/util-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loginState: boolean = false;
  currentlyloggedRole: string = 'visitor';

  private loginStateSubscription: Subscription;
  private loginRoleSubscription: Subscription;

  constructor(
    // private loginDataService: LoginDataService,
    private utilService: UtilServiceService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.setRole();
    this.utilService.roleChanged.subscribe(role => {
      this.currentlyloggedRole = role;
    });
  }

  setRole() {
    const role = this.utilService.getRoleFromToken();
    if (role) {
      this.currentlyloggedRole = role;
    } else {
      this.currentlyloggedRole = 'visitor';
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
