import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CvListingService } from 'src/app/services/cv-listing.service';

@Component({
  selector: 'app-cv-listing',
  templateUrl: './cv-listing.component.html',
  styleUrls: ['./cv-listing.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class CvListingComponent implements OnInit{

  visible: boolean = false;

  cvs : any[] = [];

  downloadCvPath: string;
  

  constructor(private cvListing:CvListingService,private messageService: MessageService, private router: Router){}  

  ngOnInit(): void {
    this.cvListing.getAllCvOfLoggedEmployer().subscribe(
      (data: any[]) => {
        this.cvs = data;
        console.log('CVs loaded:', this.cvs); 
        // Trigger change detection if needed
      },
      error => {
        console.error('Error loading CVs:', error);
      }
    );
    this.data();
  }

  data(){
    console.log('CV are : ',this.cvs);
  }

  showDialog() {
    this.visible = true;

}

// Method to handle CV download
    downloadCV(userId: number) {
      this.cvListing.downloadCV(userId).subscribe(
        (blob: Blob) => {
          // Create a URL for the blob
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `CV_${userId}.pdf`;  // You might want to modify the filename
          a.click();
          window.URL.revokeObjectURL(url);
        },
        error => {
          console.error('Error downloading CV:', error);
        }
      );
    }
    rejectApplication(applicationId){
      this.cvListing.updateApplicationStatus(applicationId).subscribe({
        next: () => {
          console.log('Application status updated successfully');
          this.messageService.add({
            severity: 'success',
            summary: 'Rejected Successful',
            detail: 'Application is rejected',
          });
          this.router.navigate(['/cv-listing']);
        },
        error: (err) => {
          console.error('Error updating application status', err);
          this.messageService.add({
            severity: 'danger',
            summary: 'Something went wrong',
            detail: 'Application is not rejected',
          });
          this.router.navigate(['/cv-listing']);
        }
      });
    }
}
