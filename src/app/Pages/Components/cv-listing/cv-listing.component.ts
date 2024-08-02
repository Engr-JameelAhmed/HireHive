import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cv-listing',
  templateUrl: './cv-listing.component.html',
  styleUrls: ['./cv-listing.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class CvListingComponent implements OnInit{

  visible: boolean = false;

  constructor(){}

  ngOnInit(): void {

  }

  showDialog() {
    this.visible = true;
}
}
