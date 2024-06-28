import { Component } from '@angular/core';

@Component({
  selector: 'app-abulance',
  templateUrl: './abulance.component.html',
  styleUrl: './abulance.component.css'
})
export class AbulanceComponent {
  facilites=[
    {
      main_heading:'Ambulance Services',
      heading:'Ambulance Services',
     content:'Two Fully equipped Advanced Life Support (ALS) Ambulance available round the clock. Clinic on Wheels - Unique concept, where in fully equipped Ambulances with facility to provide Outpatient consultations, examination, sample collection & drug dispensing available for rural camp service.',
      image_1:'abulance-service-1.png',
      image_2:'abulance-service-2.png'
    }
  ];
}
