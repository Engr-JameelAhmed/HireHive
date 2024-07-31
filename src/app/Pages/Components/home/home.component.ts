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

  role(data: string): void{
    console.log('Url contain', data);

    this.router.navigateByUrl('sign-up/' + data);
  }

}
