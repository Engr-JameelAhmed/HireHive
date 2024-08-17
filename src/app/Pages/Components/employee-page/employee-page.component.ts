import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { JobDetailsComponent } from '../job-details/job-details.component';
import { JobService } from 'src/app/services/jobs-service.service';
import { Jobs } from 'src/app/Models/Jobs';
import { FormBuilder } from '@angular/forms';



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

  private readonly _formBuilder = inject(FormBuilder);
  jobs: Jobs[] = [];
  value: string | undefined;

  value2: string | undefined;
  longText = `The Chihuahua is a Mexican breed of toy dog. It is named for the
  Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
  usually kept as a companion animal or for showing.`;

  typeSelectedValue: string;
  categorySelectedValue: string;
  locationSelectedValue: string;
  workTypeSelectedValue: string;

  type: Type[] = [
    {jobType: 'Full Time'},
    {jobType: 'Part Time'},
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
    {jobWorkType: 'On-Site'},
    {jobWorkType: 'Remote'},
    {jobWorkType: 'Hybrid'}
  ];


  constructor(
    public dialog: MatDialog,
    private jobService: JobService

  ) {}

  // ngOnInit(): void {
  //   this.jobs = this.jobService.getAllJobs();
  // }

  ngOnInit(): void {
    this.jobService.getAllJobs().subscribe((data: Jobs[]) => {
      this.jobs = data;
      debugger
      console.log('Jobs are --------: ',this.jobs);
      
    });
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

