import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Business } from 'src/app/Models/Business';
import { BusinessServiceService } from 'src/app/services/business-service.service';

@Component({
  selector: 'app-create-business',
  templateUrl: './create-business.component.html',
  styleUrls: ['./create-business.component.css']
})
export class CreateBusinessComponent {

  BusinessObject: any = {
    industry: '',
    name: '',
    description: '',
    investmentAmount: 0,
    sharePercent: 0,
  };

  constructor(private router: Router, private fb: FormBuilder, private businessService: BusinessServiceService) {}

  ngOnInit(): void {}

  BusinessPostingForm = this.fb.group({
    industry: ['', Validators.required],
    name: ['', Validators.required],
    description: ['', Validators.required],
    investmentAmount: [, Validators.required],
    sharePercent: [, Validators.required],
  });

  get industry() {
    return this.BusinessPostingForm.controls['industry'];
  }
  get name() {
    return this.BusinessPostingForm.controls['name'];
  }
  get description() {
    return this.BusinessPostingForm.controls['description'];
  }
  get investmentAmount() {
    return this.BusinessPostingForm.controls['investmentAmount'];
  }
  get sharePercent() {
    return this.BusinessPostingForm.controls['sharePercent'];
  }
  onCreateBusiness() {
    if (this.BusinessPostingForm.valid) {
      const businessData: Business = new Business(
        this.BusinessPostingForm.value.industry,
        this.BusinessPostingForm.value.name,
        this.BusinessPostingForm.value.description,
        this.BusinessPostingForm.value.investmentAmount,
        this.BusinessPostingForm.value.sharePercent,
      );
      debugger
      this.businessService.createBusiness(businessData).subscribe({
        next: (response) => {
          console.log('Business created successfully', response);
          this.router.navigate(['/businessess']); // Navigate to jobs list or similar
        },
        error: (error) => {
          console.error('Error creating job', error);
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }

}
