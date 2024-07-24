import { Component } from '@angular/core';

@Component({
  selector: 'app-emergency-facility',
  templateUrl: './emergency-facility.component.html',
  styleUrl: './emergency-facility.component.css'
})
export class EmergencyFacilityComponent {

facilites=[
  {
    main_heading:'Emergency & Trauma Care',
    heading:'Emergency & Trauma Care',
    content:'One of the Largest Emergency Department in Bengaluru with 12 dedicated beds for handling all types of emergencies 24X7. Qualified & Experienced Critical Care Experts. Availability of Minor OT & advanced life saving equipment along with patient centric approach ensure best emergency care.',
    image_1:'emergency-facility.png',
    image_2:'emergency-facility-1.png'
  }
];
}