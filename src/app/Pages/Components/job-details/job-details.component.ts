import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationService } from 'src/app/services/application.service';
import { Application } from 'src/app/Models/Application';
import { MessageService } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';
import { CvListingService } from 'src/app/services/cv-listing.service';
import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit{  
  jobId: string | null = null;
  selectedFile: File | null = null;

  @ViewChild('fileUploader') fileUploader!: FileUpload;

  currentClickedJob : any;

  constructor(
      @Inject(MAT_DIALOG_DATA) public data: any, 
      private router: Router,
      private messageService: MessageService,
      private applicationService: ApplicationService,
      private route: ActivatedRoute, 
      private cvListing: CvListingService,
      public dialogRef: MatDialogRef<JobDetailsComponent>
    ) {
    // The data object will contain the job details
    this.currentClickedJob = this.data;
    console.log('Received job data:', this.currentClickedJob);
  }
  ngOnInit(): void {
    // Get the job ID from the query parameters
    this.route.queryParams.subscribe(params => {
      this.jobId = params['jobId'] || null;
    });
  }

  CreateUpdateCV(){
    this.router.navigate(['/employeeProfile'], { queryParams: { jobId: this.data.id } });

    
  }
  CreateCV(){
    // this.ApplyForJob()
    this.router.navigate(['/employeeProfile']);
  }

  ApplyForJob(){
    const application = new Application("PENDING",this.currentClickedJob.id);
    
    this.applicationService.createNewApplication(application).subscribe(
      (response) => {
        console.log('Response for applying job is : ', response);
        
        
        this.messageService.add({
          severity: 'success',
          summary: 'Applied Successfully',
          detail: 'You Have successfully applied for the job',
        });
        // setTimeout(() => {
        //   this.router.navigate(['/employeeHome']);
        // },2000)
        
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

  handleFileUpload() {
    if (this.selectedFile) {
      this.cvListing.updateUserCv(this.selectedFile).subscribe(
        (event: HttpEvent<any>) => {
          if (event.type === HttpEventType.UploadProgress && event.total) {
            const progress = Math.round((100 * event.loaded) / event.total);
            console.log(`Upload progress: ${progress}%`);
          } else if (event instanceof HttpResponse) {  
            console.log('Upload success:', event.body);
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'CV uploaded successfully!' });

             // Navigate to employeeHome on success
             this.router.navigate(['/employeeHome']);

            // Reset file input
            this.fileUploader.clear();
            this.selectedFile = null;
          }
        },
        error => {
          console.error('Upload error:', error);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to upload CV.' });
        }
      );
    } else {
      this.messageService.add({ severity: 'warn', summary: 'No File Selected', detail: 'Please select a file before uploading.' });
    }
  }

  applyForJobWithCv(jobId: string, file: File) {
    // Logic to send the job application with the uploaded CV
    console.log('Applying for job:', jobId, 'with file:', file.name);
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded and Applied for Job' });
  }

  onFileSelect(event: { files: File[] }) {
    // Get the selected file
    this.selectedFile = event.files[0];
    // Call handleFileUpload when a file is selected
    this.handleFileUpload();
    setTimeout(() => {
      this.ApplyForJob()
      this.dialogRef.close();
    }, 1000)

    
  }

}
