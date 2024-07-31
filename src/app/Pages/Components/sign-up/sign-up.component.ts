import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { passwordMatchValidator } from 'src/app/shared/password-match.directive';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

  selectedRole: string;

  constructor(
    private fb : FormBuilder,
    private router: Router,
    private activeRoute: ActivatedRoute
  ){
}

  ngOnInit(): void {
    this.selectedRole = this.activeRoute.snapshot.paramMap.get('role');
  }




  SignUpForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+(?: [A-Za-z]+)*$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  }, {
    validators: passwordMatchValidator
  })




   // or we can directly give access to the control in a method
   get fullName(){
    return this.SignUpForm.controls['fullName'];
  }
  get email(){
    return this.SignUpForm.controls['email'];  //  instead of this big line we can simply use just email for the clean code
  }
  get password(){
    return this.SignUpForm.controls['password'];
  }
  get confirmPassword(){
    return this.SignUpForm.controls['confirmPassword'];
  }



  submitDetails(){

    console.log(this.SignUpForm.value);

  }


}
