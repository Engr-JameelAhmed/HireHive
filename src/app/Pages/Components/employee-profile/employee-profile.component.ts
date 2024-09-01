import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UploadEvent } from 'primeng/fileupload';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit{
  jobId: string | null = null;

  constructor(private messageService: MessageService, private route: ActivatedRoute) {}

  onUpload(event: UploadEvent) {
    if (this.jobId) {
      // Assuming you have a service to handle applying for jobs
      // this.applyForJobWithCv(this.jobId, event.files[0]);
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Job ID not found' });
    }
  }


    ngOnInit(): void {
      // Get the job ID from the query parameters
      this.route.queryParams.subscribe(params => {
        this.jobId = params['jobId'] || null;
      });
    }

    applyForJobWithCv(jobId: string, file: File) {
      // Logic to send the job application with the uploaded CV
      // This could involve calling a service method to handle the backend API call
      console.log('Applying for job:', jobId, 'with file:', file.name);
  
      // Example: calling a service method
      // this.jobService.applyForJob(jobId, file).subscribe(response => {
      //   this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Application submitted successfully' });
      // });
  
      this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded and Applied for Job' });
    }


}
