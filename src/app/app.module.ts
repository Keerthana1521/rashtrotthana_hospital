import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardModule } from 'primeng/card';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProgrammsComponent } from './programms/programms.component';
import { TitleButtonComponent } from './components/title-button/title-button.component';
import { ArrowBtnComponent } from './components/arrow-btn/arrow-btn.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SpecalitiesComponent } from './specalities/specalities.component';
import { DonationComponent } from './donation/donation.component';
import { BoxCardComponent } from './components/box-card/box-card.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AccordionModule } from 'primeng/accordion';
import { HealthCheckupComponent } from './health-checkup/health-checkup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';

import { ContactFormService } from './contact-form.service';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorLayoutComponent } from './doctor-layout/doctor-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ProgrammsComponent,
    TitleButtonComponent,
    ArrowBtnComponent,
    AboutUsComponent,
    SpecalitiesComponent,
    DonationComponent,
    BoxCardComponent,
    FacilitiesComponent,
    HealthCheckupComponent,
    ContactFormComponent,
    DoctorsComponent,
    DoctorLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    CardModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    DropdownModule,
    InputTextareaModule,
    AccordionModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastModule,
    HttpClientModule
  ],
  providers: [
    MessageService,
    ContactFormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
