import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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

  constructor(private cvListing:CvListingService){}

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
}
