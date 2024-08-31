import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Jobs } from 'src/app/Models/Jobs';
import { JobService } from 'src/app/services/jobs-service.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit{

  visible: boolean = false;

  values: string;
  jobs: Jobs[] = []; // Use the Jobs type here

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    debugger
    this.jobService.getAllJobsOfCurrentLoggedEmployer().subscribe(
      (data: Jobs[]) => {

        debugger
        this.jobs = data;
        console.log('Jobs loaded:', this.jobs);
      },
      error => {
        console.error('Error loading jobs:', error);
      }
    );
  }

}
