import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import lottie from 'lottie-web';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements AfterViewInit{

  constructor(
    private router: Router
  ){}



  animations = [
    { containerId: "employee", path: "assets/Animations/Employee.json" },
    { containerId: "employer", path: "assets/Animations/Employer.json" },
    { containerId: "investor", path: "assets/Animations/Investor.json" },
    { containerId: "owner", path: "assets/Animations/Business Owner.json" }
  ];

  ngAfterViewInit() {
    this.animations.forEach(animation => {
      lottie.loadAnimation({
        container: document.getElementById(animation.containerId),
        path: animation.path,
        renderer: 'svg',
        loop: true,
        autoplay: true
      });
    });
  }

  role(roleType: string): void {
    let roleVar = '';
    switch (roleType) {
      case 'Employee':
        roleVar = 'ROLE_EMPLOYEE';
        break;
      case 'Employer':
        roleVar = 'ROLE_EMPLOYER';
        break;
      case 'Investor':
        roleVar = 'ROLE_INVESTOR';
        break;
      case 'Owner':
        roleVar = 'ROLE_OWNER';
        break;
    }
  
    // Pass the roleVar as a query parameter
    this.router.navigate(['sign-up', roleType], { queryParams: { role: roleVar } });
  }

}
