
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'; 
import { content } from 'html2canvas/dist/types/css/property-descriptors/content';


@Component({
  selector: 'app-icu',
  templateUrl: './icu.component.html',
  styleUrl: './icu.component.css'
})
export class IcuComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    
  }
  ngOnInit(): void {
    this.titleService.setTitle("Premier Intensive Care Unit in Bangalore - Rashtrotthana Hospital");  

  this.metaService.updateTag({ name: 'description', content: 'Get advanced critical care services at Rashtrotthana Hospital\'s top-rated Intensive Care Unit in Bangalore.' });

  this.metaService.updateTag({ name: 'keywords', content: 'intensive care unit, critical care, ICU Bangalore, multispeciality hospital' });

  }
  facilites=[
    {
      main_heading:'I.C.U',
      heading:'I.C.U',
      content:'Rashtrotthana Hospital’s state-of-the-art Intensive Care Unit (ICU) in Bangalore is equipped with over 30 specialized beds, supporting comprehensive critical care for various medical emergencies. Our ICU facility includes dedicated units: Medical ICU, Surgical ICU, Pediatric ICU, Neonatal ICU and Cardiac ICU, each designed for focused, specialized care with advanced life-support systems and continuous monitoring.',
      content_1:'Under the 24/7 guidance of qualified and experienced intensivists, Rashtrotthana Hospital’s ICU is prepared for complex medical needs, providing high-quality emergency care that patients and families can trust. With cutting-edge equipment, strict infection control, and round-the-clock staffing, our ICU is a leading choice for critical care in Bangalore.',
      image_1:'icu-facility-service-1.jpeg',
      image_2:'icu-facility-service-2.jpeg',
       bg_image:'icu-bg.png'
    }
  ];
}
