import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer-page',
  templateUrl: './employer-page.component.html',
  styleUrls: ['./employer-page.component.css']
})
export class EmployerPageComponent {

  constructor(
    private router: Router

  ){}



  cvListing(){
    this.router.navigateByUrl('/employerHome/cv-listing')
  }

  jobPosting(){
    this.router.navigateByUrl('/employerHome/job-posting')
  }

}
