import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Business } from 'src/app/Models/Business';
import { BusinessServiceService } from 'src/app/services/business-service.service';

@Component({
  selector: 'app-businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.css']
})
export class BusinessesComponent implements OnInit {

  businesses: Business[] = [];
  visible: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private businessService: BusinessServiceService
  ) { }

  showDialog() {
    this.visible = true;
  }

  ngOnInit(): void {
    this.businessService.getAllPendingBusinesses().subscribe(
      (data: Business[]) => {
        this.businesses = data;
        console.log('Businesses loaded:', this.businesses);
      },
      error => {
        console.error('Error loading businesses:', error);
      }
    );
  }

  CreateBusinessForm = this.fb.group({
    businessName: ['', Validators.required],
    locationName: ['', Validators.required],
    businesslevel: ['', Validators.required],
    cityName: ['', Validators.required],
    businessSite: ['', Validators.required],
    countryName: ['', Validators.required],
  });

  get businessName() {
    return this.CreateBusinessForm.controls['businessName'];
  }
  get locationName() {
    return this.CreateBusinessForm.controls['locationName'];
  }
  get businesslevel() {
    return this.CreateBusinessForm.controls['businesslevel'];
  }
  get cityName() {
    return this.CreateBusinessForm.controls['cityName'];
  }
  get businessSite() {
    return this.CreateBusinessForm.controls['businessSite'];
  }
  get countryName() {
    return this.CreateBusinessForm.controls['countryName'];
  }

  CreateBusiness() {
    console.log(this.CreateBusinessForm.value);
  }

  // Method to trigger the file input click
  // triggerFileInput(businessId: number) {
  //   const fileInput = document.getElementById(`fileInput_${businessId}`) as HTMLInputElement;
  //   if (fileInput) {
  //     fileInput.click();
  //   }
  // }

  // Method to handle file selection
  onFileSelected(event: Event, businessId: number) {
    const input = event.target as HTMLInputElement;
    const file = input?.files?.[0];
    
    if (file) {
      console.log(`File selected for business ID ${businessId}:`, file);
      // Here you can handle file upload logic, e.g., call a service to upload the file.
    }
  }
}
