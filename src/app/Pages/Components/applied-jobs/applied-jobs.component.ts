import { Component } from '@angular/core';
import { Jobs } from 'src/app/Models/Jobs';
import { JobService } from 'src/app/services/jobs-service.service';

@Component({
  selector: 'app-applied-jobs',
  templateUrl: './applied-jobs.component.html',
  styleUrls: ['./applied-jobs.component.css']
})
export class AppliedJobsComponent {
  visible: boolean = false;

  values: string;
  jobs: any[] = []; // Use the Jobs type here

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.jobService.getAllAppliedJobs().subscribe(
      (data: any[]) => {
        this.jobs = data;
        console.log('Jobs loaded:', this.jobs);
      },
      error => {
        console.error('Error loading jobs:', error);
      }
    );
  }

}
