import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { CalendarModule } from 'primeng/calendar';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardModule } from 'primeng/card';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProgrammsComponent } from './programms/programms.component';
import { TitleButtonComponent } from './shared/title-button/title-button.component';
import { ArrowBtnComponent } from './shared/arrow-btn/arrow-btn.component';
// import { AboutUsComponent } from './about-us/about-us.component';
import { SpecalitiesComponent } from './specalities/specalities.component';
// import { DonationComponent } from './donation/donation.component';
import { BoxCardComponent } from './shared/box-card/box-card.component';
import { FacilitiesComponent } from './facilities/facilities.component';
// import { ContactFormComponent } from './contact-form/contact-form.component';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AccordionModule } from 'primeng/accordion';
// import { HealthCheckupComponent } from './health-checkup/health-checkup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ContactFormService } from './contact-form.service';
import { DoctorsComponent } from './doctors/doctors.component';
// import { DoctorLayoutComponent } from './doctor-layout/doctor-layout.component';
import { FeaturesContentComponent } from './shared/features-content/features-content.component';
// import { EmergencyFacilityComponent } from './facilities/emergency-facility/emergency-facility.component';
// import { OperationTheatreComponent } from './facilities/operation-theatre/operation-theatre.component';
// import { IcuComponent } from './facilities/icu/icu.component';
// import { AbulanceComponent } from './facilities/abulance/abulance.component';
// import { DieteryComponent } from './facilities/dietery/dietery.component';
// import { PhysiotherapyComponent } from './facilities/physiotherapy/physiotherapy.component';
// import { LaboratoryComponent } from './facilities/laboratory/laboratory.component';
// import { InPatientComponent } from './facilities/in-patient/in-patient.component';
import { FacilityContentComponent } from './facility-content/facility-content.component';
// import { RadiologyComponent } from './facilities/radiology/radiology.component';
// import { EndoscopyComponent } from './facilities/endoscopy/endoscopy.component';
// import { NutritionComponent } from './facilities/nutrition/nutrition.component';
// import { PharmacyComponent } from './facilities/pharmacy/pharmacy.component';
import { SpecialityComponentComponent } from './speciality-component/speciality-component.component';
// import { GeneralMedicineComponent } from './specalities/general-medicine/general-medicine.component';
// import { GeneralSurgeryComponent } from './specalities/general-surgery/general-surgery.component';
// import { PaediatricsComponent } from './specalities/paediatrics/paediatrics.component';
// import { NephrologyComponent } from './specalities/nephrology/nephrology.component';
// import { UrologyComponent } from './specalities/urology/urology.component';
// import { OrthopedicsComponent } from './specalities/orthopedics/orthopedics.component';
// import { GastrosciencesComponent } from './specalities/gastrosciences/gastrosciences.component';
// import { CardiacComponent } from './specalities/cardiac/cardiac.component';
// import { PulmonologyComponent } from './specalities/pulmonology/pulmonology.component';
// import { OphthalmologyComponent } from './specalities/ophthalmology/ophthalmology.component';
// import { DentalComponent } from './specalities/dental/dental.component';
// import { ENTComponent } from './specalities/ent/ent.component';
// import { NeurosciencesComponent } from './specalities/neurosciences/neurosciences.component';
// import { PsychiatryComponent } from './specalities/psychiatry/psychiatry.component';
// import { OncologyComponent } from './specalities/oncology/oncology.component';
// import { EmergencyMedicineComponent } from './emergency-medicine/emergency-medicine.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ModernMedicineComponent } from './specalities/modern-medicine/modern-medicine.component';
import { FacilityBulletContentComponent } from './shared/facility-bullet-content/facility-bullet-content.component';
// import { DialysisComponent } from './facilities/dialysis/dialysis.component';
// import { AnesthesiologyComponent } from './specalities/anesthesiology/anesthesiology.component';


// import { ObstetricsGynaecologyComponent } from './specalities/obstetrics-gynaecology/obstetrics-gynaecology.component';
// import { EndocrinologyComponent } from './specalities/endocrinology/endocrinology.component';
import { InsurancePdfBoxComponent } from './insurance-pdf-box/insurance-pdf-box.component';
// import { InsuranceComponent } from './facilities/insurance/insurance.component';
import { KneeReplacementComponent } from './knee-replacement/knee-replacement.component';
// import { YogaComponent } from './specalities/yoga/yoga.component';
// import { AyurvedaComponent } from './specalities/ayurveda/ayurveda.component';
// import { HomeopathyComponent } from './specalities/homeopathy/homeopathy.component';
// import { NaturopathyComponent } from './specalities/naturopathy/naturopathy.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AyurvedhaDoctorsCarouselComponent } from './ayurvedha-doctors-carousel/ayurvedha-doctors-carousel.component';
import { AyurvedaCarouselComponent } from './ayurveda-carousel/ayurveda-carousel.component';
import { AppointFormComponent } from './appoint-form/appoint-form.component';
import { ReadMoreBtnComponent } from './shared/read-more-btn/read-more-btn.component';
import { DoctorAppointmentComponent } from './doctor-appointment/doctor-appointment.component';
// import { BlogComponent } from './blog/blog.component';
// import { BlogPostComponent } from './blog-post/blog-post.component';
// import { HerniaComponent } from './hernia/hernia.component';
// import { ProctologyComponent } from './proctology/proctology.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ProgrammsComponent,
    // TitleButtonComponent,
    // ArrowBtnComponent,
    // AboutUsComponent,
    SpecalitiesComponent,
    // DonationComponent,
    // BoxCardComponent,
    // FacilitiesComponent,
    // HealthCheckupComponent,
    // ContactFormComponent,
    DoctorsComponent,
    // DoctorLayoutComponent,
    // FeaturesContentComponent,
    // EmergencyFacilityComponent,
    // OperationTheatreComponent,
    // IcuComponent,
    // AbulanceComponent,
    // DieteryComponent,
    // PhysiotherapyComponent,
    // LaboratoryComponent,
    // InPatientComponent,
    // FacilityContentComponent,
    // RadiologyComponent,
    // EndoscopyComponent,
    // NutritionComponent,
    // PharmacyComponent,
    // SpecialityComponentComponent,
    // GeneralMedicineComponent,
    // GeneralSurgeryComponent,
    // PaediatricsComponent,
    // NephrologyComponent,
    // UrologyComponent,
    // OrthopedicsComponent,
    // GastrosciencesComponent,
    // CardiacComponent,
    // PulmonologyComponent,
    // OphthalmologyComponent,
    // DentalComponent,
    // ENTComponent,
    // NeurosciencesComponent,
    // PsychiatryComponent,
    // OncologyComponent,
    // EmergencyMedicineComponent,
    // ModernMedicineComponent,
    // FacilityBulletContentComponent,
    // DialysisComponent,
    // AnesthesiologyComponent,
    // ObstetricsGynaecologyComponent,
    // EndocrinologyComponent,
    // InsurancePdfBoxComponent,
    // InsuranceComponent,
    KneeReplacementComponent,
    // YogaComponent,
    // AyurvedaComponent,
    // HomeopathyComponent,
    // NaturopathyComponent,
    DoctorDetailsComponent,
    AyurvedhaDoctorsCarouselComponent,
    AyurvedaCarouselComponent,
    AppointFormComponent,
    ReadMoreBtnComponent,
    DoctorAppointmentComponent,
    // BlogComponent,
    // BlogPostComponent,
    // HerniaComponent,
    // ProctologyComponent
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
    HttpClientModule,
    NgbModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    CascadeSelectModule,
    CalendarModule,
    SharedModule,
    InfiniteScrollModule

  ],
  providers: [
    MessageService,
    ContactFormService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
