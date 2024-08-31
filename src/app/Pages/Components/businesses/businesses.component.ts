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
export class BusinessesComponent implements OnInit{

  businesses: Business[] = []; // Use the Jobs type here
    
  visible: boolean = false;
  constructor(
    private fb : FormBuilder,
    private router: Router,
    private businessService: BusinessServiceService
  ){}
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
  get
   businessName(){
    return this.CreateBusinessForm.controls['businessName'];
  }
  get locationName(){
    return this.CreateBusinessForm.controls['locationName'];
  }
  get businesslevel(){
    return this.CreateBusinessForm.controls['businesslevel'];
  }
  get cityName(){
    return this.CreateBusinessForm.controls['cityName'];
  }
  get businessSite(){
    return this.CreateBusinessForm.controls['businessSite'];
  }
  get countryName(){
    return this.CreateBusinessForm.controls['countryName'];
  }
  CreateBusiness(){
    console.log(this.CreateBusinessForm.value);

  }


}
