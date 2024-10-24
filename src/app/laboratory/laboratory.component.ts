import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'; 

@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html',
  styleUrl: './laboratory.component.css'
})
export class LaboratoryComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    
  }
  ngOnInit(): void {
    this.titleService.setTitle("Advanced Laboratory Services - Rashtrotthana Hospital Bangalore");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital\'s laboratory offers accurate and prompt diagnostic testing services in Bangalore.' });

  this.metaService.updateTag({ name: 'keywords', content: 'lab tests, diagnostic lab, hospital lab Bangalore, pathology services' });

  }
  facilites=[
    {
      main_heading:'Laboratory Services',
      heading:'Laboratory Services',
     content:'Discover excellence in diagnostic precision at Rashtrotthana Hospitals Laboratory Services. Equipped with state-of-the-art technology and staffed by experienced technicians, our laboratory ensures accurate and timely results to guide informed healthcare decisions. From routine blood tests to specialized diagnostics encompassing hematology, biochemistry, microbiology, and immunology, we cover a wide spectrum of medical needs. Our patient-centric approach empowers individuals with personalized testing options, fostering a holistic approach to healthcare delivery. Trusted by medical professionals, our laboratory services are a cornerstone of precise diagnostics, enabling patients to embark on their health journey with confidence and control',
      image_1:'lab-service-1.png',
      image_2:'lab-service-2.png',
       bg_image:'lab-bg.png'
    }
  ];
}
