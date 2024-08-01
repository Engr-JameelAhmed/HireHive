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

const routes: Routes = [

   { path: '', component: HomeComponent },
   { path: 'home', component:  HomeComponent},
   { path: 'sign-in', component:  SignInComponent},
   { path: 'sign-up', component:  SignUpComponent},
   { path: 'sign-up/:role', component:  SignUpComponent},
   { path: 'contact-us', component:  ContactUsComponent},
   { path: 'about', component:  AboutComponent},
   { path: 'why-us', component:  WhyUsComponent},
   { path: 'employeeHome', component:  EmployeePageComponent},
   { path: 'employerHome', component:  EmployerPageComponent},
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
