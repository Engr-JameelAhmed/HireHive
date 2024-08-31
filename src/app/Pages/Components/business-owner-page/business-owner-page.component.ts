import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Business } from 'src/app/Models/Business';
import { BusinessServiceService } from 'src/app/services/business-service.service';

@Component({
  selector: 'app-business-owner-page',
  templateUrl: './business-owner-page.component.html',
  styleUrls: ['./business-owner-page.component.css']
})
export class BusinessOwnerPageComponent implements OnInit{
    
  businesses: Business[] = []; 

  constructor(private fb : FormBuilder,
    private router: Router,
    private businessService: BusinessServiceService){}

    ngOnInit(): void {
      this.businessService.getAllActiveBusinesses().subscribe(
        (data: Business[]) => {
          this.businesses = data;
          console.log('Businesses loaded:', this.businesses);
        },
        error => {
          console.error('Error loading businesses:', error);
        }
      );
    }

}
