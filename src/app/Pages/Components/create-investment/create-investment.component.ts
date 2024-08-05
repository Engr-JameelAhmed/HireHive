import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-investment',
  templateUrl: './create-investment.component.html',
  styleUrls: ['./create-investment.component.css']
})
export class CreateInvestmentComponent {
  values: string;
  investmentObject: any = {
    fullName: '',
    address: '',
    contact: '',
    amount: '',
    email: '',
    investmentHorizon: '',
    company: '',
    currentOccupation: ''
  }
  constructor(
    private router: Router,
    private fb : FormBuilder,
  ) {}
  ngOnInit(): void {}

  InvestmentForm = this.fb.group({
    fullName: ['', Validators.required],
    address: ['', Validators.required],
    contact: ['', Validators.required],
    amount: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    investmentHorizon: ['', Validators.required],
    company: ['', Validators.required],
    currentOccupation: ['', Validators.required],
  })
  get fullName(){
    return this.InvestmentForm.controls['fullName'];
  }
  get address(){
    return this.InvestmentForm.controls['address'];
  }
  get contact(){
    return this.InvestmentForm.controls['contact'];
  }
  get amount(){
    return this.InvestmentForm.controls['amount'];
  }
  get email(){
    return this.InvestmentForm.controls['email'];
  }
  get investmentHorizon(){
    return this.InvestmentForm.controls['investmentHorizon'];
  }
  get company(){
    return this.InvestmentForm.controls['company'];
  }
  get currentOccupation(){
    return this.InvestmentForm.controls['currentOccupation'];
  }
  onCreateJob(){
    console.log(this.InvestmentForm.value);
  }
}
