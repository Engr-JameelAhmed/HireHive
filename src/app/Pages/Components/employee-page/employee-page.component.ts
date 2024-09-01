import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { JobDetailsComponent } from '../job-details/job-details.component';
import { JobService } from 'src/app/services/jobs-service.service';
import { Jobs } from 'src/app/Models/Jobs';
import { FormBuilder } from '@angular/forms';
import { filter } from 'rxjs';



interface Type {
  jobType: string;
}
interface Category {
  jobCategory: string;
}
interface Location {
  jobLocation: string;
}
interface workType {
  jobWorkType: string;
}


@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeePageComponent implements OnInit{
  jobs: Jobs[] = [];
  private readonly _formBuilder = inject(FormBuilder);
  filteredJobs: Jobs[];
  value: string | undefined; 

  typeSelectedValue: string;
  categorySelectedValue: string;
  locationSelectedValue: string;
  workTypeSelectedValue: string;

  type: Type[] = [
    {jobType: 'ON_SITE'},
    {jobType: 'REMOTE'},
    {jobType: 'HYBRID'}
    
  ];
  category: Category[] = [
    {jobCategory: 'IT'},
    {jobCategory: 'Marketing'},
    {jobCategory: 'Finance'},
    {jobCategory: 'Managment'},
    {jobCategory: 'Business'},
    {jobCategory: 'ComScience'},
    {jobCategory: 'Software Engineering'},
    {jobCategory: 'Psychology'}

  ];
  location: Location[] = [
    {jobLocation: 'Karachi'},
    {jobLocation: 'Quetta'},
    {jobLocation: 'Nushki'},
    {jobLocation: 'Dalbandin'},
    {jobLocation: 'Karachi'},
    {jobLocation: 'Quetta'},
    {jobLocation: 'Nushki'},
    {jobLocation: 'Dalbandin'}
  ];
  workype: workType[] = [
    {jobWorkType: 'PART_TIME'},
    {jobWorkType: 'FULL_TIME'},
    {jobWorkType: 'CONTRACT'}
  ];


  constructor(
    public dialog: MatDialog,
    private jobService: JobService,
    private cdr: ChangeDetectorRef

  ) {}


  ngOnInit(): void {
    this.jobService.getAllJobs().subscribe(
      (data: Jobs[]) => {
        this.jobs = data;
        this.filteredJobs = this.jobs; // Initialize with all jobs
        console.log('Jobs from service:', this.jobs);
        this.cdr.detectChanges(); // Force change detection
      },
      (error) => {
        console.error('Error fetching jobs:', error);
      }
    );
  }
  findJobByOptons(){
    this.filteredJobs = this.jobs.filter(job => 
      (!this.typeSelectedValue || job.type === this.typeSelectedValue) &&
      (!this.categorySelectedValue || job.category === this.categorySelectedValue) &&
      (!this.locationSelectedValue || job.location === this.locationSelectedValue) &&
      (!this.workTypeSelectedValue || job.workType === this.workTypeSelectedValue)
    );
    console.log('Filtered Jobs are : ==> ',this.filteredJobs);
  }
  searchJobs(): void {
    if (this.value) {
      this.filteredJobs = this.jobs.filter(job =>
        job.title.toLowerCase().includes(this.value.toLowerCase())
      );
    } else {
      this.filteredJobs = [...this.jobs]; // Reset to include all jobs
    }
  }

  details(job: any) {
    const dialogRef = this.dialog.open(JobDetailsComponent, {
      data: job // Pass the job data as a parameter
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  readonly toppings = this._formBuilder.group({
    IT: false,
    Marketing: false,
    Finance: false,
    Managment: false,
    Business: false,
    ComputerScience: false,
    Psychology: false,
    SoftwareEngineering: false,
  });
}

