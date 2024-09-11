import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/Components/home/home.component';
import { PageNotFoundComponent } from './Pages/Components/page-not-found/page-not-found.component';
import { ContactUsComponent } from './Pages/Components/contact-us/contact-us.component';
import { AboutComponent } from './Pages/Components/about/about.component';
import { SignInComponent } from './Pages/Components/sign-in/sign-in.component';
import { SignUpComponent } from './Pages/Components/sign-up/sign-up.component';
import { WhyUsComponent } from './Pages/Components/why-us/why-us.component';
import { EmployeePageComponent } from './Pages/Components/employee-page/employee-page.component';
import { EmployerPageComponent } from './Pages/Components/employer-page/employer-page.component';
import { InvestorPageComponent } from './Pages/Components/investor-page/investor-page.component';
import { BusinessOwnerPageComponent } from './Pages/Components/business-owner-page/business-owner-page.component';
import { EmployeeProfileComponent } from './Pages/Components/employee-profile/employee-profile.component';
import { CvListingComponent } from './Pages/Components/cv-listing/cv-listing.component';
import { JobPostingComponent } from './Pages/Components/job-posting/job-posting.component';
import { CreateJobComponent } from './Pages/Components/create-job/create-job.component';
import { JobsComponent } from './Pages/Components/jobs/jobs.component';
import { BusinessesComponent } from './Pages/Components/businesses/businesses.component';
import { InvestmentsComponent } from './Pages/Components/investments/investments.component';
import { CreateInvestmentComponent } from './Pages/Components/create-investment/create-investment.component';
import { InvestmentProposalsComponent } from './Pages/Components/investment-proposals/investment-proposals.component';
import { CreateBusinessComponent } from './Pages/Components/create-business/create-business.component';
import { AppliedJobsComponent } from './Pages/Components/applied-jobs/applied-jobs.component';

const routes: Routes = [

   { path: '', component: HomeComponent },
   { path: 'home', component:  HomeComponent},
   { path: 'sign-in', component:  SignInComponent},
   { path: 'sign-up', component:  SignUpComponent},
   { path: 'sign-up/:role', component:  SignUpComponent},
   { path: 'contact-us', component:  ContactUsComponent},
   { path: 'about', component:  AboutComponent},
   { path: 'why-us', component:  WhyUsComponent},
   { path: 'cv-listing', component:  CvListingComponent},
   { path: 'create-job', component:  CreateJobComponent},
   { path: 'jobs', component:  JobsComponent},
   { path: 'create-investment', component:  CreateInvestmentComponent},
   { path: 'create-business', component:  CreateBusinessComponent},
   { path: 'investments', component:  InvestmentsComponent},
   { path: 'investment-proposal', component:  InvestmentProposalsComponent},
   { path: 'businessess', component:  BusinessesComponent},
   { path: 'employeeHome', component:  EmployeePageComponent},
   { path: 'employerHome', component:  EmployerPageComponent},
   { path: 'appliedJobs', component: AppliedJobsComponent },
   { path: 'employerHome', children: [
    { path: 'cv-listing', component:  CvListingComponent},
    { path: 'job-posting', component:  JobPostingComponent},
   ]},

   { path: 'investorHome', component:  InvestorPageComponent},
   { path: 'employeeProfile', component:  EmployeeProfileComponent},
   { path: 'business-owner-Home', component:  BusinessOwnerPageComponent},
   { path: '**', component:  PageNotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
