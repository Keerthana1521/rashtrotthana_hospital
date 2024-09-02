import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'; 

@Component({
  selector: 'app-physiotherapy',
  templateUrl: './physiotherapy.component.html',
  styleUrl: './physiotherapy.component.css'
})
export class PhysiotherapyComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    
  }
  ngOnInit(): void {
    this.titleService.setTitle("Expert Physiotherapy & Rehabilitation - Rashtrotthana Hospital Bangalore");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital offers specialized physiotherapy and rehabilitation services to aid your recovery in Bangalore.' });

  this.metaService.updateTag({ name: 'keywords', content: 'physiotherapy services, rehabilitation, multispeciality hospital Bangalore' });

  }
  facilites=[
    {
      main_heading:'Physiotherapy',
      heading:'Physiotherapy',
     content:'The Department of Physiotherapy addresses problems associated with movement dysfunction and pain that can arise from musculoskeletal, neurological, respiratory and chronic disability conditions or from mental illness and intellectual impairment. The physiotherapy department at Rashtrotthana Hospital strives to provide an outpatient service that is based on high standards of care and quality. Treatment Goals are achieved through comprehensive assessment with individual treatment combining education, continuous support, home exercises programs and advice.',
      image_1:'physiotherapy-facility-service-1.jpeg',
      image_2:'physiotherapy-facility-service-2.jpeg'
    }
  ];
}
