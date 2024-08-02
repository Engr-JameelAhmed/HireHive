import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-posting',
  templateUrl: './job-posting.component.html',
  styleUrls: ['./job-posting.component.css'],
})
export class JobPostingComponent implements OnInit {
  visible: boolean = false;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}



  createJob() {
    this.visible = true;
  }

}
