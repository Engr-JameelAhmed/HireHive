import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent {


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router) {
    // The data object will contain the job details
    console.log('Received job data:', this.data);
  }

  ApplyForJob(){
    this.router.navigate(['/employeeProfile'], { queryParams: { jobId: this.data.id } });
  }
}
