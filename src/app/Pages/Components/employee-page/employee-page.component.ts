import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  // encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})
export class EmployeePageComponent implements OnInit {
  
  jobs: Jobs[] = [];
  filteredJobs: Jobs[] = [];
  value: string | undefined;

  typeSelectedValue: string;
  categorySelectedValue: string;
  locationSelectedValue: string;
  workTypeSelectedValue: string;

  type: Type[] = [
    { jobType: 'ON_SITE' },
    { jobType: 'REMOTE' },
    { jobType: 'HYBRID' }
  ];

  category: Category[] = [
    { jobCategory: 'IT' },
    { jobCategory: 'MARKETING' },
    { jobCategory: 'FINANCE' },
    { jobCategory: 'MANAGMENT' },
    { jobCategory: 'BUSINESS' },
    { jobCategory: 'COMPUTER_SCIENCE' },
    { jobCategory: 'SOFTWARE_ENGINEERING' },
    { jobCategory: 'PYSCHOLOGY' }
  ];

  location: Location[] = [
    { jobLocation: 'KARACHI' },
    { jobLocation: 'QUETTA' },
    { jobLocation: 'NUSHKI' },
    { jobLocation: 'DALBANDIN' }
  ];

  workype: workType[] = [
    { jobWorkType: 'PART_TIME' },
    { jobWorkType: 'FULL_TIME' },
    { jobWorkType: 'CONTRACT' }
  ];

  readonly toppings = this._formBuilder.group({
    IT: false,
    MARKETING: false,
    FINANCE: false,
    MANAGMENT: false,
    BUSINESS: false,
    COMPUTER_SCIENCE: false,
    PYSCHOLOGY: false,
    SOFTWARE_ENGINEERING: false,
  });

  constructor(
    public dialog: MatDialog,
    private jobService: JobService,
    private cdr: ChangeDetectorRef,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    // this.getAllJobs();
    this.getAllNotAppliedJobs();
    
    // Subscribe to checkbox changes
    this.toppings.valueChanges.subscribe(() => {
      this.applyFilters();
    });
  }

  findJobByOptons() {
    this.applyFilters();
  }

  clearFilters() {
    this.filteredJobs = [];
    this.typeSelectedValue = '';
    this.categorySelectedValue = '';
    this.locationSelectedValue = '';
    this.workTypeSelectedValue = '';
    this.toppings.reset();
    // this.getAllJobs();
    this.getAllNotAppliedJobs();
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

  applyFilters() {
    const selectedCategories = Object.keys(this.toppings.controls).filter(
      key => this.toppings.controls[key].value
    );
    
    this.filteredJobs = this.jobs.filter(job => 
      (!this.typeSelectedValue || job.type === this.typeSelectedValue) &&
      (!this.categorySelectedValue || job.category === this.categorySelectedValue) &&
      (!this.locationSelectedValue || job.location === this.locationSelectedValue) &&
      (!this.workTypeSelectedValue || job.workType === this.workTypeSelectedValue) &&
      (selectedCategories.length === 0 || selectedCategories.includes(job.category))
    );
    
    console.log('Filtered Jobs are : ==> ', this.filteredJobs);
  }

  details(job: any) {
    const dialogRef = this.dialog.open(JobDetailsComponent, {
      data: job // Pass the job data as a parameter
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getAllJobs() {
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
  getAllNotAppliedJobs() {
    this.jobService.getAllNotJobs().subscribe(
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
}
