import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Business } from 'src/app/Models/Business';
import { BusinessServiceService } from 'src/app/services/business-service.service';

@Component({
  selector: 'app-create-business',
  templateUrl: './create-business.component.html',
  styleUrls: ['./create-business.component.css']
})
export class CreateBusinessComponent {
  
  selectedFile: File | null = null;

  BusinessPostingForm = this.fb.group({
    industry: ['', Validators.required],
    name: ['', Validators.required],
    description: ['', Validators.required],
    investmentAmount: [, Validators.required],
    sharePercent: [, Validators.required],
  });

  constructor(
    private router: Router, 
    private fb: FormBuilder, 
    private businessService: BusinessServiceService,
    private messageService: MessageService,
  ) {}

  get industry() { return this.BusinessPostingForm.controls['industry']; }
  get name() { return this.BusinessPostingForm.controls['name']; }
  get description() { return this.BusinessPostingForm.controls['description']; }
  get investmentAmount() { return this.BusinessPostingForm.controls['investmentAmount']; }
  get sharePercent() { return this.BusinessPostingForm.controls['sharePercent']; }

  onFileSelect(event: { files: File[] }) {
    // Get the selected file
    this.selectedFile = event.files[0];
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

      this.businessService.createBusiness(businessData, this.selectedFile).subscribe({
        next: (response) => {
          console.log('Business created successfully', response);
          this.router.navigate(['/businessess']); // Navigate to the businesses list or similar
          this.messageService.add({
            severity: 'success',
            summary: 'Created Successfully',
            detail: 'Your Business has been created!',
          });
        },
        error: (error) => {
          console.error('Error creating business', error);
          this.messageService.add({
            severity: 'error',
            summary: 'Creation Failed',
            detail: 'Please check your details and try again.',
          });
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
