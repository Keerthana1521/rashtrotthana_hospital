import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { AboutUsComponent } from './about-us/about-us.component';
// import { SpecalitiesComponent } from './specalities/specalities.component';
// import { FacilitiesComponent } from './facilities/facilities.component';
// import { HealthCheckupComponent } from './health-checkup/health-checkup.component';
// import { ContactFormComponent } from './contact-form/contact-form.component';
// import { DoctorLayoutComponent } from './doctor-layout/doctor-layout.component';
// import { DonationComponent } from './donation/donation.component';
// import { AbulanceComponent } from './abulance/abulance.component';
// import { DieteryComponent } from './dietery/dietery.component';
// import { EmergencyFacilityComponent } from './emergency-facility/emergency-facility.component';
// import { IcuComponent } from './icu/icu.component';
// import { LaboratoryComponent } from './laboratory/laboratory.component';
// import { OperationTheatreComponent } from './operation-theatre/operation-theatre.component';
// import { PhysiotherapyComponent } from './physiotherapy/physiotherapy.component';
// import { InPatientComponent } from './in-patient/in-patient.component';
// import { RadiologyComponent } from './radiology/radiology.component';
// import { EndoscopyComponent } from './endoscopy/endoscopy.component';
// import { NutritionComponent } from './nutrition/nutrition.component';
// import { PharmacyComponent } from './pharmacy/pharmacy.component';
// import { ModernMedicineComponent } from './modern-medicine/modern-medicine.component';
// import { GeneralMedicineComponent } from './general-medicine/general-medicine.component';
// import { GeneralSurgeryComponent } from './general-surgery/general-surgery.component';
// import { PaediatricsComponent } from './paediatrics/paediatrics.component';
// import { NephrologyComponent } from './nephrology/nephrology.component';
// import { UrologyComponent } from './urology/urology.component';
// import { OrthopedicsComponent } from './orthopedics/orthopedics.component';
// import { GastrosciencesComponent } from './gastrosciences/gastrosciences.component';
// import { CardiacComponent } from './cardiac/cardiac.component';
// import { PulmonologyComponent } from './pulmonology/pulmonology.component';
// import { OphthalmologyComponent } from './ophthalmology/ophthalmology.component';
// import { DentalComponent } from './dental/dental.component';
// import { ENTComponent } from './ent/ent.component';
// import { NeurosciencesComponent } from './neurosciences/neurosciences.component';
// import { PsychiatryComponent } from './psychiatry/psychiatry.component';
// import { OncologyComponent } from './oncology/oncology.component';
// import { EmergencyMedicineComponent } from './emergency-medicine/emergency-medicine.component';
// import { DialysisComponent } from './dialysis/dialysis.component';
// import { AnesthesiologyComponent } from './anesthesiology/anesthesiology.component';
// import { ObstetricsGynaecologyComponent } from './obstetrics-gynaecology/obstetrics-gynaecology.component';
// import { EndocrinologyComponent } from './endocrinology/endocrinology.component';
// import { InsuranceComponent } from './insurance/insurance.component';
// import { KneeReplacementComponent } from './knee-replacement/knee-replacement.component';
// import { YogaComponent } from './yoga/yoga.component';
// import { AyurvedaComponent } from './ayurveda/ayurveda.component';
// import { HomeopathyComponent } from './homeopathy/homeopathy.component';
// import { NaturopathyComponent } from './naturopathy/naturopathy.component';
// import { HerniaComponent } from './hernia/hernia.component';
// import { ProctologyComponent } from './proctology/proctology.component';
// import { BlogComponent } from './blog/blog.component';
// import { BlogPostComponent } from './blog-post/blog-post.component';

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'about-us', component: AboutUsComponent },
//   { path: 'specialities', component: SpecalitiesComponent,
//   children: [
//     {path:'best-general-medicine-hospital-in-bangalore', component:ModernMedicineComponent,
//   children: [
//   {path:'internal-medicine-hospital-in-bangalore',component:GeneralMedicineComponent},
//   {path:'best-general-surgery-hospital-in-bangalore',component:GeneralSurgeryComponent},
//   {path:'best-paediatric-hospital-in-bangalore',component:PaediatricsComponent},
//   {path:'best-nephrology-hospital-in-bangalore',component:NephrologyComponent},
//   {path:'best-urology-hospital-in-bangalore',component:UrologyComponent},
//   {path:'best-orthopaedics-hospital-in-bangalore',component:OrthopedicsComponent},
//   {path:'best-gastroenterology-hospital-in-bangalore',component:GastrosciencesComponent},
//   {path:'best-cardiology-hospital-in-bangalore',component:CardiacComponent},
//   {path:'best-pulmonology-hospital-in-bangalore',component:PulmonologyComponent},
//   {path:'best-eye-hospital-in-bangalore',component:OphthalmologyComponent},
//   {path:'best-dental-hospital-in-bangalore',component:DentalComponent},
//   {path:'best-ent-hospital-in-bangalore',component:ENTComponent},
//   {path:'best-neurology-hospital-in-bangalore',component:NeurosciencesComponent},
//   {path:'best-pshychiatry-hospital-in-bangalore',component:PsychiatryComponent},
//   {path:'best-oncology-hospital-in-bangalore',component:OncologyComponent},
//   {path:'best-emergency-medicine-hospital-in-bangalore',component:EmergencyMedicineComponent},
//   // {path:'emergency-medicine',component:EmergencyMedicineComponent},
//   {path:'best-anesthesiology-hospital-in-india',component:AnesthesiologyComponent},
//   {path:'best-obstetrics-and-gynecologist-hospital-in-bangalore',component:ObstetricsGynaecologyComponent},
//   {path:'best-endocrinology-hospital-in-bangalore',component:EndocrinologyComponent},
//   ]},
// ]},

//   {path:'yoga-therapy-bangalore',component:YogaComponent},
//   {path:'ayurvedic-treatment-bangalore',component:AyurvedaComponent},
//   {path:'homeopathy-treatment-bangalore',component:HomeopathyComponent},
//   {path:'lifestyle-medicine-bangalore',component:NaturopathyComponent},

//   { path: 'facility', component: FacilitiesComponent,
// children: [
//   {path:'best-ambulance-service-rashtrotthana-hospital-bangalore', component:AbulanceComponent},
//   {path:'dietary-services-bangalore', component:DieteryComponent},
//   {path:'best-emergency-trauma-multispeciality-hospital-bangalore', component:EmergencyFacilityComponent},
//   {path:'best-intensive-care-unit-multispeciality-hospital-bangalore', component:IcuComponent},
//   {path:'laboratory-services-bangalore', component:LaboratoryComponent},
//   {path:'operation-theatre-bangalore', component:OperationTheatreComponent},
//   {path:'physiotherapy-services-bangalore', component:PhysiotherapyComponent},
//   {path:'inpatient-facility-bangalore',component:InPatientComponent},
//   {path:'top-diagnostics-multi-speciality-hospital-bangalore',component:RadiologyComponent},
//   {path:'endoscopy-services-bangalore',component:EndoscopyComponent},
//   {path:'nutrition-dietetics-services-bangalore',component:NutritionComponent},
//   {path:'24-hours-pharmacy-store-bangalore',component:PharmacyComponent},
//   {path:'health-insurance-plans-bangalore',component:InsuranceComponent},
//   {path:'best-kidney-dialysis-multispeciality-hospital-bangalore',component:DialysisComponent},
 
// ]},
// {path:'laboratory-services-bangalore', component:LaboratoryComponent},
// {path:'best-kidney-dialysis-multispeciality-hospital-bangalore',component:DialysisComponent},
// {path:'24-hours-pharmacy-store-bangalore',component:PharmacyComponent},
// {path:'top-diagnostics-multi-speciality-hospital-bangalore',component:RadiologyComponent},
// {path:'best-emergency-trauma-multispeciality-hospital-bangalore', component:EmergencyFacilityComponent},

//   { path: 'health-check-up-packages-bangalore', component: HealthCheckupComponent },
//   { path: 'contact-us-bangalore', component: ContactFormComponent },
//   {path: 'best-doctors-bangalore', component:DoctorLayoutComponent},
//   {path:'donate-to-hospital-bangalore', component:DonationComponent},
  
//   {path:'total-knee-replacement-bangalore',component:KneeReplacementComponent},
//   {path:'hernia-treatment-bangalore',component:HerniaComponent},
//   {path:'proctology-services-bangalore',component:ProctologyComponent},
  
//   { path: 'blog', component: BlogComponent },
//   { path: 'blog/:id', component: BlogPostComponent }

// ]; 
const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'about-us', loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule) },
  { path: 'specialities', loadChildren: () => import('./specalities/specialities.module').then(m => m.SpecialitiesModule) },
  { path: 'facility', loadChildren: () => import('./facilities/facilities.module').then(m => m.FacilitiesModule) },
  { path: 'health-check-up-packages-bangalore', loadChildren: () => import('./health-checkup/health-checkup.module').then(m => m.HealthCheckupModule) },
  { path: 'contact-us-bangalore', loadChildren: () => import('./contact-form/contact-form.module').then(m => m.ContactFormModule) },
  { path: 'best-doctors-bangalore', loadChildren: () => import('./doctor-layout/doctor-layout.module').then(m => m.DoctorLayoutModule) },
  { path: 'donate-to-hospital-bangalore', loadChildren: () => import('./donation/donation.module').then(m => m.DonationModule) },
  { path: 'yoga-therapy-bangalore', loadChildren: () => import('./specalities/yoga/yoga.module').then(m => m.YogaModule) },
  { path: 'ayurvedic-treatment-bangalore', loadChildren: () => import('./specalities/ayurveda/ayurveda.module').then(m => m.AyurvedaModule) },
  { path: 'homeopathy-treatment-bangalore', loadChildren: () => import('./specalities/homeopathy/homeopathy.module').then(m => m.HomeopathyModule) },
  { path: 'lifestyle-medicine-bangalore', loadChildren: () => import('./specalities/naturopathy/naturopathy.module').then(m => m.NaturopathyModule) },
  { path: 'total-knee-replacement-bangalore', loadChildren: () => import('./knee-replacement/knee-replacement.module').then(m => m.KneeReplacementModule) },
  { path: 'hernia-treatment-bangalore', loadChildren: () => import('./hernia/hernia.module').then(m => m.HerniaModule) },
  { path: 'proctology-services-bangalore', loadChildren: () => import('./proctology/proctology.module').then(m => m.ProctologyModule) },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: 'blog/:id', loadChildren: () => import('./blog-post/blog-post.module').then(m => m.BlogPostModule) },
  // Add more routes for other components/modules
  { path: '**', redirectTo: '', pathMatch: 'full' } // wildcard route for handling 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled', useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
