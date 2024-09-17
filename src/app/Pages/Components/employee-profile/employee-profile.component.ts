import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FileUpload, UploadEvent } from 'primeng/fileupload';
import { CvListingService } from 'src/app/services/cv-listing.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  // jobId: string | null = null;
  // selectedFile: File | null = null;

  // @ViewChild('fileUploader') fileUploader!: FileUpload;

  constructor(
    private messageService: MessageService, 
    private route: ActivatedRoute, 
    private cvListing: CvListingService,
    private router: Router) {}

  ngOnInit(): void {
    // Get the job ID from the query parameters
    // this.route.queryParams.subscribe(params => {
    //   this.jobId = params['jobId'] || null;
    // });
  }

  // handleFileUpload() {
  //   if (this.selectedFile) {
  //     this.cvListing.updateUserCv(this.selectedFile).subscribe(
  //       (event: HttpEvent<any>) => {
  //         if (event.type === HttpEventType.UploadProgress && event.total) {
  //           const progress = Math.round((100 * event.loaded) / event.total);
  //           console.log(`Upload progress: ${progress}%`);
  //         } else if (event instanceof HttpResponse) {  
  //           console.log('Upload success:', event.body);
  //           this.messageService.add({ severity: 'success', summary: 'Success', detail: 'CV uploaded successfully!' });

  //            // Navigate to employeeHome on success
  //            this.router.navigate(['/employeeHome']);

  //           // Reset file input
  //           this.fileUploader.clear();
  //           this.selectedFile = null;
  //         }
  //       },
  //       error => {
  //         console.error('Upload error:', error);
  //         this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to upload CV.' });
  //       }
  //     );
  //   } else {
  //     this.messageService.add({ severity: 'warn', summary: 'No File Selected', detail: 'Please select a file before uploading.' });
  //   }
  // }

  // applyForJobWithCv(jobId: string, file: File) {
  //   // Logic to send the job application with the uploaded CV
  //   console.log('Applying for job:', jobId, 'with file:', file.name);
  //   this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded and Applied for Job' });
  // }

  // onFileSelect(event: { files: File[] }) {
  //   // Get the selected file
  //   this.selectedFile = event.files[0];
  //   // Call handleFileUpload when a file is selected
  //   this.handleFileUpload();
  // }
}
