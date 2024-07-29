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
    AboutComponent
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
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
