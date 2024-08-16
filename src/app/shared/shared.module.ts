import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleButtonComponent } from './title-button/title-button.component';
import { ArrowBtnComponent } from './arrow-btn/arrow-btn.component';
import { BoxCardComponent } from './box-card/box-card.component';
import { ReadMoreBtnComponent } from './read-more-btn/read-more-btn.component';
import { InsurancePdfBoxComponent } from '../insurance-pdf-box/insurance-pdf-box.component';
import { SpecialityComponentComponent } from '../shared/speciality-component/speciality-component.component';
import { FacilityBulletContentComponent } from './facility-bullet-content/facility-bullet-content.component';
import { FacilityContentComponent } from '../shared/facility-content/facility-content.component';

@NgModule({
  declarations: [
    TitleButtonComponent,
    ArrowBtnComponent,
    BoxCardComponent,
    ReadMoreBtnComponent,
    InsurancePdfBoxComponent,
    SpecialityComponentComponent,
    FacilityBulletContentComponent,
    FacilityContentComponent
     // Declare the component
  ],
  imports: [
    CommonModule,
     // Import any common modules like CommonModule
  ],
  exports: [
    TitleButtonComponent,
    ArrowBtnComponent,
    BoxCardComponent,
    ReadMoreBtnComponent,
    InsurancePdfBoxComponent,
    SpecialityComponentComponent,
    FacilityBulletContentComponent,
    FacilityContentComponent // Export the component so it can be used in other modules       // Export the pipe so it can be used in other modules
  ]
})
export class SharedModule { }
