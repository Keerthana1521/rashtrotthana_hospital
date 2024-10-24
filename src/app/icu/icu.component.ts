
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'; 


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
      content:'30+ Bedded ICU unit - Well Equipped to handle all types of medical emergencies. Medical ICU, Surgical ICU, Pediatric ICU, Neonatal ICU & Cardiac ICU available for focused critical care round the clock. Qualified & Experienced Intensivist provided cover at all times.',
      image_1:'icu-facility-service-1.jpeg',
      image_2:'icu-facility-service-2.jpeg',
       bg_image:'icu-bg.png'
    }
  ];
}
