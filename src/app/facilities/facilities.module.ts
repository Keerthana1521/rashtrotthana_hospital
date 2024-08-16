import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FacilitiesComponent } from './facilities.component';
import { AbulanceComponent } from './abulance/abulance.component';
import { DieteryComponent } from './dietery/dietery.component';
import { EmergencyFacilityComponent } from './emergency-facility/emergency-facility.component';
import { IcuComponent } from './icu/icu.component';
import { LaboratoryComponent } from './laboratory/laboratory.component';
import { OperationTheatreComponent } from './operation-theatre/operation-theatre.component';
import { PhysiotherapyComponent } from './physiotherapy/physiotherapy.component';
import { InPatientComponent } from './in-patient/in-patient.component';
import { RadiologyComponent } from './radiology/radiology.component';
import { EndoscopyComponent } from './endoscopy/endoscopy.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { DialysisComponent } from './dialysis/dialysis.component';

const routes: Routes = [
  {
    path: '', component: FacilitiesComponent,
    children: [
      { path: 'best-ambulance-service-rashtrotthana-hospital-bangalore', component: AbulanceComponent },
      { path: 'dietary-services-bangalore', component: DieteryComponent },
      { path: 'best-emergency-trauma-multispeciality-hospital-bangalore', component: EmergencyFacilityComponent },
      { path: 'best-intensive-care-unit-multispeciality-hospital-bangalore', component: IcuComponent },
      { path: 'laboratory-services-bangalore', component: LaboratoryComponent },
      { path: 'operation-theatre-bangalore', component: OperationTheatreComponent },
      { path: 'physiotherapy-services-bangalore', component: PhysiotherapyComponent },
      { path: 'inpatient-facility-bangalore', component: InPatientComponent },
      { path: 'top-diagnostics-multi-speciality-hospital-bangalore', component: RadiologyComponent },
      { path: 'endoscopy-services-bangalore', component: EndoscopyComponent },
      { path: 'nutrition-dietetics-services-bangalore', component: NutritionComponent },
      { path: '24-hours-pharmacy-store-bangalore', component: PharmacyComponent },
      { path: 'health-insurance-plans-bangalore', component: InsuranceComponent },
      { path: 'best-kidney-dialysis-multispeciality-hospital-bangalore', component: DialysisComponent }
    ]
  }
];

@NgModule({
  declarations: [
    FacilitiesComponent,
    AbulanceComponent,
    DieteryComponent,
    EmergencyFacilityComponent,
    IcuComponent,
    LaboratoryComponent,
    OperationTheatreComponent,
    PhysiotherapyComponent,
    InPatientComponent,
    RadiologyComponent,
    EndoscopyComponent,
    NutritionComponent,
    PharmacyComponent,
    InsuranceComponent,
    DialysisComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    FacilitiesComponent,
    AbulanceComponent,
    DieteryComponent,
    EmergencyFacilityComponent,
    IcuComponent,
    LaboratoryComponent,
    OperationTheatreComponent,
    PhysiotherapyComponent,
    InPatientComponent,
    RadiologyComponent,
    EndoscopyComponent,
    NutritionComponent,
    PharmacyComponent,
    InsuranceComponent,
    DialysisComponent
  ]
})
export class FacilitiesModule { }
