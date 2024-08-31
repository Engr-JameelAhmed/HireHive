import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Jobs } from 'src/app/Models/Jobs';
import { JobService } from 'src/app/services/jobs-service.service';


export interface JobData {
  title: string;
  description: string;
  companyName: string;
  salary: number;
  location: string;
  category: string;
  type: string;
  workType: string;
}

@Component({
  selector: 'app-job-posting',
  templateUrl: './job-posting.component.html',
  styleUrls: ['./job-posting.component.css'],
})
export class JobPostingComponent implements OnInit {
  locations: string[] = ['KARACHI', 'QUETTA', 'LAHORE', 'ISLAMABAD'];
  categories: string[] = ['IT', 'MARKETING', 'FINANCE', 'MANAGEMENT', 'BUSINESS', 'COMPUTER_SCIENCE', 'PYSCHOLOGY', 'SOFTWARE_ENGINEERING'];
  types: string[] = ['HYBRID', 'REMOTE', 'ON_SITE'];
  workTypes: string[] = ['PART_TIME', 'FULL_TIME', 'CONTRACT'];


  jobObject: any = {
    title: '',
    description: '',
    companyName: '',
    salary: '',
    location: '',
    type: '',
    category: '',
    workType: '',
  };

  constructor(private router: Router, private fb: FormBuilder, private jobService: JobService) {}

  ngOnInit(): void {}

  

  JobPostingForm = this.fb.group({
    title: ['', Validators.required],
    companyName: ['', Validators.required],
    salary: [, Validators.required],
    location: ['', Validators.required],
    category: ['', Validators.required],
    type: ['', Validators.required],
    workType: ['', Validators.required],
    description: ['', Validators.required],
  });

  get location() {
    return this.JobPostingForm.controls['location'];
  }
  get companyName() {
    return this.JobPostingForm.controls['companyName'];
  }
  get type() {
    return this.JobPostingForm.controls['type'];
  }
  get salary() {
    return this.JobPostingForm.controls['salary'];
  }
  get title() {
    return this.JobPostingForm.controls['title'];
  }
  get category() {
    return this.JobPostingForm.controls['category'];
  }
  get description() {
    return this.JobPostingForm.controls['description'];
  }
  get workType() {
    return this.JobPostingForm.controls['workType'];
  }

  

  onCreateJob() {
    if (this.JobPostingForm.valid) {
      const jobData: Jobs = new Jobs(
        this.JobPostingForm.value.companyName,
        this.JobPostingForm.value.description,
        this.JobPostingForm.value.salary,
        this.JobPostingForm.value.title,
        this.JobPostingForm.value.type,
        this.JobPostingForm.value.location,
        this.JobPostingForm.value.category,
        this.JobPostingForm.value.workType
      );
  
      this.jobService.createJob(jobData).subscribe({
        next: (response) => {
          console.log('Job created successfully', response);
          this.router.navigate(['/jobs']); // Navigate to jobs list or similar
        },
        error: (error) => {
          console.error('Error creating job', error);
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
