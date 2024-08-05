import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.css']
})
export class BusinessesComponent {

  visible: boolean = false;
  constructor(
    private fb : FormBuilder,
    private router: Router,
  ){}
  showDialog() {
      this.visible = true;
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
