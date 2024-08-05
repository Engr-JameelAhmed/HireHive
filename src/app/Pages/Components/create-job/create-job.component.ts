import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent {

  values: string;
  jobObject: any = {
    location: '',
    department: '',
    type: '',
    salary: '',
    postedDate: '',
    jobDescription: ''
  }


  constructor(
    private router: Router,
    private fb : FormBuilder,
  ) {}
  ngOnInit(): void {}

  JobPostingForm = this.fb.group({
    location: ['', Validators.required],
    department: ['', Validators.required],
    type: ['', Validators.required],
    salary: ['', Validators.required],
    postedDate: ['', Validators.required],
    jobDescription: ['', Validators.required],
  })
  get location(){
    return this.JobPostingForm.controls['location'];
  }
  get department(){
    return this.JobPostingForm.controls['department'];
  }
  get type(){
    return this.JobPostingForm.controls['type'];
  }
  get salary(){
    return this.JobPostingForm.controls['salary'];
  }
  get postedDate(){
    return this.JobPostingForm.controls['postedDate'];
  }
  get jobDescription(){
    return this.JobPostingForm.controls['jobDescription'];
  }


  onCreateJob(){
    console.log(this.JobPostingForm.value);
  }

}
