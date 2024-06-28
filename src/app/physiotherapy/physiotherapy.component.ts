import { Component } from '@angular/core';

@Component({
  selector: 'app-physiotherapy',
  templateUrl: './physiotherapy.component.html',
  styleUrl: './physiotherapy.component.css'
})
export class PhysiotherapyComponent {
  facilites=[
    {
      main_heading:'Physiotherapy',
      heading:'Physiotherapy',
     content:'The Department of Physiotherapy addresses problems associated with movement dysfunction and pain that can arise from musculoskeletal, neurological, respiratory and chronic disability conditions or from mental illness and intellectual impairment. The physiotherapy department at JMRH strives to provide an outpatient service that is based on high standards of care and quality. Treatment Goals are achieved through comprehensive assessment with individual treatment combining education, continuous support, home exercises programs and advice.',
      image_1:'Physiotherapy-service-1.png',
      image_2:'Physiotherapy-service-2.png'
    }
  ];
}
