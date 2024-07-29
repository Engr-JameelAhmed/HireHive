import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/Components/home/home.component';
import { PageNotFoundComponent } from './Pages/Components/page-not-found/page-not-found.component';
import { ContactUsComponent } from './Pages/Components/contact-us/contact-us.component';
import { AboutComponent } from './Pages/Components/about/about.component';
import { SignInComponent } from './Pages/Components/sign-in/sign-in.component';
import { SignUpComponent } from './Pages/Components/sign-up/sign-up.component';
import { WhyUsComponent } from './Pages/Components/why-us/why-us.component';

const routes: Routes = [

   { path: '', component: HomeComponent },
   { path: 'home', component:  HomeComponent},
   { path: 'sign-in', component:  SignInComponent},
   { path: 'sign-up', component:  SignUpComponent},
   { path: 'contact-us', component:  ContactUsComponent},
   { path: 'about', component:  AboutComponent},
   { path: 'why-us', component:  WhyUsComponent},
   { path: '**', component:  PageNotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
