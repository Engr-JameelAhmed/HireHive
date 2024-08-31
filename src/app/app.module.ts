import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './Pages/Components/sign-up/sign-up.component';
import { SignInComponent } from './Pages/Components/sign-in/sign-in.component';
import { LandingPageComponent } from './Pages/Components/landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './Pages/Components/home/home.component';
import { PageNotFoundComponent } from './Pages/Components/page-not-found/page-not-found.component';
import { ContactUsComponent } from './Pages/Components/contact-us/contact-us.component';
import { WhyUsComponent } from './Pages/Components/why-us/why-us.component';
import { AboutComponent } from './Pages/Components/about/about.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ImageModule } from 'primeng/image';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { EmployeePageComponent } from './Pages/Components/employee-page/employee-page.component';
import { EmployerPageComponent } from './Pages/Components/employer-page/employer-page.component';
import { InvestorPageComponent } from './Pages/Components/investor-page/investor-page.component';
import { BusinessOwnerPageComponent } from './Pages/Components/business-owner-page/business-owner-page.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { JobDetailsComponent } from './Pages/Components/job-details/job-details.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { InputTextModule } from 'primeng/inputtext';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { EmployeeProfileComponent } from './Pages/Components/employee-profile/employee-profile.component';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CvListingComponent } from './Pages/Components/cv-listing/cv-listing.component';
import { JobPostingComponent } from './Pages/Components/job-posting/job-posting.component';
import { DialogModule } from 'primeng/dialog';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CreateJobComponent } from './Pages/Components/create-job/create-job.component';
import { JobsComponent } from './Pages/Components/jobs/jobs.component';
import { BusinessesComponent } from './Pages/Components/businesses/businesses.component';
import { CreateInvestmentComponent } from './Pages/Components/create-investment/create-investment.component';
import { InvestmentsComponent } from './Pages/Components/investments/investments.component';
import { InvestmentProposalsComponent } from './Pages/Components/investment-proposals/investment-proposals.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { DropdownModule } from 'primeng/dropdown';
import { CreateBusinessComponent } from './Pages/Components/create-business/create-business.component'; 

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    LandingPageComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    WhyUsComponent,
    AboutComponent,
    EmployeePageComponent,
    EmployerPageComponent,
    InvestorPageComponent,
    BusinessOwnerPageComponent,
    JobDetailsComponent,
    EmployeeProfileComponent,
    CvListingComponent,
    JobPostingComponent,
    CreateJobComponent,
    JobsComponent,
    BusinessesComponent,
    CreateInvestmentComponent,
    InvestmentsComponent,
    InvestmentProposalsComponent,
    CreateBusinessComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ContextMenuModule,
    ImageModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    InputTextModule,
    MatProgressBarModule,
    MatCardModule,
    MatChipsModule,
    MatCheckboxModule,
    MatDividerModule,
    FileUploadModule,
    ToastModule,
    DialogModule,
    SplitButtonModule,
    InputTextareaModule,
    DropdownModule



  ],
  providers: [
            MessageService, 
            { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
        ],
  bootstrap: [AppComponent]
})
export class AppModule { }
