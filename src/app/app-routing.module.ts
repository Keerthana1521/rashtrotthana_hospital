import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SpecalitiesComponent } from './specalities/specalities.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { HealthCheckupComponent } from './health-checkup/health-checkup.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { DoctorLayoutComponent } from './doctor-layout/doctor-layout.component';
import { DonationComponent } from './donation/donation.component';
import { AbulanceComponent } from './abulance/abulance.component';
import { DieteryComponent } from './dietery/dietery.component';
import { EmergencyFacilityComponent } from './emergency-facility/emergency-facility.component';
import { IcuComponent } from './icu/icu.component';
import { LaboratoryComponent } from './laboratory/laboratory.component';
import { OperationTheatreComponent } from './operation-theatre/operation-theatre.component';
import { PhysiotherapyComponent } from './physiotherapy/physiotherapy.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'specialists', component: SpecalitiesComponent },
  { path: 'facility', component: FacilitiesComponent},
  { path: 'health-checkup', component: HealthCheckupComponent },
  { path: 'contact', component: ContactFormComponent },
  {path: 'doctor', component:DoctorLayoutComponent},
  {path:'donation', component:DonationComponent},
  {path:'abulance', component:AbulanceComponent},
  {path:'dietery', component:DieteryComponent},
  {path:'emergency', component:EmergencyFacilityComponent},
  {path:'icu', component:IcuComponent},
  {path:'laboratory', component:LaboratoryComponent},
  {path:'operation-theatre', component:OperationTheatreComponent},
  {path:'physiotherapy', component:PhysiotherapyComponent},
  
  

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
