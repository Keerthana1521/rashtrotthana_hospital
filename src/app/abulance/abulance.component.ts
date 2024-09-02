
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'; 


@Component({
  selector: 'app-abulance',
  templateUrl: './abulance.component.html',
  styleUrl: './abulance.component.css'
})
export class AbulanceComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    
  }
  ngOnInit(): void {
    this.titleService.setTitle("Reliable Ambulance Service in Bangalore - Rashtrotthana Hospital");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital provides fast and reliable ambulance services across Bangalore, ensuring timely medical transport.' });

  this.metaService.updateTag({ name: 'keywords', content: 'ambulance service, emergency transport, best ambulance Bangalore' });

  }
  facilites=[
    {
      main_heading:'Ambulance Services',
      heading:'Ambulance Services',
     content:'Two Fully equipped Advanced Life Support(ALS) Ambulance available round the clock. Clinic on Wheels - Unique concept, where in fully equipped Ambulances with facility to provide Outpatient consultations, examination, sample collection & drug dispensing available for rural camp service.',
      image_1:'abulance-service-1.png',
      image_2:'abulance-service-2.jpg'
    }
  ];
}
