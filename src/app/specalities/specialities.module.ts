import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SpecalitiesComponent } from './specalities.component';
import { ModernMedicineComponent } from './modern-medicine/modern-medicine.component';
import { GeneralMedicineComponent } from './general-medicine/general-medicine.component';
import { GeneralSurgeryComponent } from './general-surgery/general-surgery.component';
import { PaediatricsComponent } from './paediatrics/paediatrics.component';
import { NephrologyComponent } from './nephrology/nephrology.component';
import { UrologyComponent } from './urology/urology.component';
import { OrthopedicsComponent } from './orthopedics/orthopedics.component';
import { GastrosciencesComponent } from './gastrosciences/gastrosciences.component';
import { CardiacComponent } from './cardiac/cardiac.component';
import { PulmonologyComponent } from './pulmonology/pulmonology.component';
import { OphthalmologyComponent } from './ophthalmology/ophthalmology.component';
import { DentalComponent } from './dental/dental.component';
import { ENTComponent } from './ent/ent.component';
import { NeurosciencesComponent } from './neurosciences/neurosciences.component';
import { PsychiatryComponent } from './psychiatry/psychiatry.component';
import { OncologyComponent } from './oncology/oncology.component';
import { EmergencyMedicineComponent } from './emergency-medicine/emergency-medicine.component';
import { AnesthesiologyComponent } from './anesthesiology/anesthesiology.component';
import { ObstetricsGynaecologyComponent } from './obstetrics-gynaecology/obstetrics-gynaecology.component';
import { EndocrinologyComponent } from './endocrinology/endocrinology.component';
import { YogaModule } from './yoga/yoga.module';
import { AyurvedaModule } from './ayurveda/ayurveda.module';
import { HomeopathyModule } from './homeopathy/homeopathy.module';
import { NaturopathyModule } from './naturopathy/naturopathy.module';

const routes: Routes = [
  {
    path: '', component: SpecalitiesComponent,
    children: [
      {
        path: 'best-general-medicine-hospital-in-bangalore', component: ModernMedicineComponent,
        children: [
          { path: 'internal-medicine-hospital-in-bangalore', component: GeneralMedicineComponent },
          { path: 'best-general-surgery-hospital-in-bangalore', component: GeneralSurgeryComponent },
          { path: 'best-paediatric-hospital-in-bangalore', component: PaediatricsComponent },
          { path: 'best-nephrology-hospital-in-bangalore', component: NephrologyComponent },
          { path: 'best-urology-hospital-in-bangalore', component: UrologyComponent },
          { path: 'best-orthopaedics-hospital-in-bangalore', component: OrthopedicsComponent },
          { path: 'best-gastroenterology-hospital-in-bangalore', component: GastrosciencesComponent },
          { path: 'best-cardiology-hospital-in-bangalore', component: CardiacComponent },
          { path: 'best-pulmonology-hospital-in-bangalore', component: PulmonologyComponent },
          { path: 'best-eye-hospital-in-bangalore', component: OphthalmologyComponent },
          { path: 'best-dental-hospital-in-bangalore', component: DentalComponent },
          { path: 'best-ent-hospital-in-bangalore', component: ENTComponent },
          { path: 'best-neurology-hospital-in-bangalore', component: NeurosciencesComponent },
          { path: 'best-pshychiatry-hospital-in-bangalore', component: PsychiatryComponent },
          { path: 'best-oncology-hospital-in-bangalore', component: OncologyComponent },
          { path: 'best-emergency-medicine-hospital-in-bangalore', component: EmergencyMedicineComponent },
          { path: 'best-anesthesiology-hospital-in-india', component: AnesthesiologyComponent },
          { path: 'best-obstetrics-and-gynecologist-hospital-in-bangalore', component: ObstetricsGynaecologyComponent },
          { path: 'best-endocrinology-hospital-in-bangalore', component: EndocrinologyComponent },
        ]
      },
      { path: 'yoga-therapy-bangalore', loadChildren: () => YogaModule },
      { path: 'ayurvedic-treatment-bangalore', loadChildren: () => AyurvedaModule },
      { path: 'homeopathy-treatment-bangalore', loadChildren: () => HomeopathyModule },
      { path: 'lifestyle-medicine-bangalore', loadChildren: () => NaturopathyModule },
    
    ]
  }
];

@NgModule({
  declarations: [
    SpecalitiesComponent,
    ModernMedicineComponent,
    GeneralMedicineComponent,
    GeneralSurgeryComponent,
    PaediatricsComponent,
    NephrologyComponent,
    UrologyComponent,
    OrthopedicsComponent,
    GastrosciencesComponent,
    CardiacComponent,
    PulmonologyComponent,
    OphthalmologyComponent,
    DentalComponent,
    ENTComponent,
    NeurosciencesComponent,
    PsychiatryComponent,
    OncologyComponent,
    EmergencyMedicineComponent,
    AnesthesiologyComponent,
    ObstetricsGynaecologyComponent,
    EndocrinologyComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SpecialitiesModule { }
