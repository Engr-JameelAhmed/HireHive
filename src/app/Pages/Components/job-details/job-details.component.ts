import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent {


  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    // The data object will contain the job details
    console.log('Received job data:', this.data);
  }
}
