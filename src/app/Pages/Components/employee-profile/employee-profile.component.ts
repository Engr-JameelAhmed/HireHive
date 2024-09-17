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


  private urls: { [key: string]: string } = {
    'file1': 'https://www.canva.com/resumes/templates/',  // URL for the first div
    'file2': 'https://zety.com/resume-builder',                 // URL for the second div (replace with actual URL)
    'file3': 'https://resume.io/app/create-resume'                  // URL for the third div (replace with actual URL)
  };


  constructor(
    private messageService: MessageService, 
    private route: ActivatedRoute, 
    private cvListing: CvListingService,
    private router: Router) {}

  ngOnInit(): void {
    
  }

  openUrl(fileId: string): void {
    const url = this.urls[fileId];
    if (url) {
      window.open(url, '_blank');
    }
  }
}
