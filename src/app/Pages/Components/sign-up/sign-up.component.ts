import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/Models/User';
import { UserServiceService } from 'src/app/services/user-service.service';
import { passwordMatchValidator } from 'src/app/shared/password-match.directive';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  selectedRole: string;
  selectedFile: File | null = null; // For storing the selected file
  isRoleDisabled = false; // Track whether the role field is disabled

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private messageService: MessageService,
    private userService: UserServiceService // Inject UserService
  ) {}

  ngOnInit(): void {
    this.selectedRole = this.activeRoute.snapshot.paramMap.get('role');
    this.setRoleBasedOnSelection();
  }

  SignUpForm = this.fb.group(
    {
      username: [
        '',
        [Validators.required, Validators.pattern(/^[A-Za-z]+(?: [A-Za-z]+)*$/)],
      ],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      role: [''] // Mark role as optional, it can be an empty string
    },
    {
      validators: passwordMatchValidator,
    }
  );

  // or we can directly give access to the control in a method
  get username() {
    return this.SignUpForm.controls['username'];
  }
  get password() {
    return this.SignUpForm.controls['password'];
  }
  get confirmPassword() {
    return this.SignUpForm.controls['confirmPassword'];
  }
  get email() {
    return this.SignUpForm.controls['email']; //  instead of this big line we can simply use just email for the clean code
  }
  get role() {
    return this.SignUpForm.controls['role'];
  }
  get gender() {
    return this.SignUpForm.controls['gender'];
  }

  // Method to set the role based on the selected role
  private setRoleBasedOnSelection() {
    let roleValue: string;
    switch (this.selectedRole) {
      case 'Employee':
        roleValue = 'ROLE_EMPLOYEE';
        break;
      case 'Employer':
        roleValue = 'ROLE_EMPLOYER';
        break;
      case 'Investor':
        roleValue = 'ROLE_INVESTOR';
        break;
      case 'Owner':
        roleValue = 'ROLE_BUSINESSOWNER';
        break;
      default:
        roleValue = '';
    }
    // Set the role field value and disable it
    this.SignUpForm.get('role')?.setValue(roleValue);
    this.SignUpForm.get('role')?.disable(); // Disable the role field
    this.isRoleDisabled = true; // Update flag to reflect field status in the template
  }

  submitDetails() {
    // Set the role based on the selected role
    let roleValue: string;
    switch (this.selectedRole) {
      case 'Employee':
        roleValue = 'ROLE_EMPLOYEE';
        break;
      case 'Employer':
        roleValue = 'ROLE_EMPLOYER';
        break;
      case 'Investor':
        roleValue = 'ROLE_INVESTOR';
        break;
      case 'BusinessOwner':
        roleValue = 'ROLE_BUSINESSOWNER';
        break;
      default:
        roleValue = this.SignUpForm.value.role; // Use form value if selectedRole is not set
    }
  
    if (this.SignUpForm.invalid) {
      // If form is invalid, do nothing
      return;
    }
  
    // Create a new User object
    const newUser = new User(
      this.SignUpForm.value.username,
      this.SignUpForm.value.password,
      this.SignUpForm.value.email,
      roleValue,
      this.SignUpForm.value.gender
    );
  
    console.log('user overall data for signUp is : ', newUser);
    
    // Call the backend service to create the user
    this.userService.registerUser(newUser).subscribe(
      (response) => {
        // Handle successful registration, navigate to a different page or show a success message
        console.log('User registered successfully:', response);
        this.router.navigate(['/home']); // Redirect to success page or any other page

        this.messageService.add({
          severity: 'success',
          summary: 'Created Successfully',
          detail: 'Welcome, Your Account has been created!',
        });
      },
      (error) => {
        // Handle error, show an error message
        console.error('Error registering user:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Signup Failed',
          detail: 'Please check your credentials and try again.',
        });
      }
    );
  }
  
  // File selection handler (optional)
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }
}
