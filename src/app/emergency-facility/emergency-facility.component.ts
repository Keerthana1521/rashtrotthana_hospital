
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'; 


@Component({
  selector: 'app-emergency-facility',
  templateUrl: './emergency-facility.component.html',
  styleUrl: './emergency-facility.component.css'
})
export class EmergencyFacilityComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    
  }
  ngOnInit(): void {
    this.titleService.setTitle("Best Emergency & Trauma Care Hospital in Bangalore - Rashtrotthana");  

  this.metaService.updateTag({ name: 'description', content: 'Discover top-tier emergency and trauma care services at Rashtrotthana Hospital, Bangalore\'s leading multispeciality healthcare provider.' });

  this.metaService.updateTag({ name: 'keywords', content: 'emergency care, trauma center, best hospital Bangalore, 24/7 emergency services' });

  }

facilites=[
  {
    main_heading:'Emergency & Trauma Care',
    heading:'Emergency & Trauma Care',
    content:'One of the Largest Emergency Department in Bengaluru with 12 dedicated beds for handling all types of emergencies 24X7. Qualified & Experienced Critical Care Experts. Availability of Minor OT & advanced life saving equipment along with patient centric approach ensure best emergency care.',
    image_1:'emergency-facility.png',
    image_2:'emergency-facility-1.png',
     bg_image:'emergency-bg.png'
  }
];
}