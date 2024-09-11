import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { ApplicationService } from 'src/app/services/application.service';
import { Application } from 'src/app/Models/Application';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent {  

  currentClickedJob : any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router,private messageService: MessageService,private applicationService: ApplicationService) {
    // The data object will contain the job details
    this.currentClickedJob = this.data;
    console.log('Received job data:', this.currentClickedJob);
  }

  CreateUpdateCV(){
    this.router.navigate(['/employeeProfile'], { queryParams: { jobId: this.data.id } });
  }

  ApplyForJob(){
    const application = new Application("PENDING",this.currentClickedJob.id);
    
    this.applicationService.createNewApplication(application).subscribe(
      (response) => {
        debugger
        console.log('Response for applying job is : ', response);
        
        this.router.navigate(['/employeeHome']);
        this.messageService.add({
          severity: 'success',
          summary: 'Applied Successfully',
          detail: 'You Have successfully applied for the job',
        });
      },
      (error) => {
        // Handle error, show an error message
        console.error('Error applying for the job:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Applying Failed',
          detail: 'Something went wrong Please try again.',
        });
      }
    )
  }
}
