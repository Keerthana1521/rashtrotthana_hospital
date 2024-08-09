
import { Facility } from '../facility.model';
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'; 


@Component({
  selector: 'app-radiology',
  templateUrl: './radiology.component.html',
  styleUrl: './radiology.component.css'
})
export class RadiologyComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    
  }
  ngOnInit(): void {
    this.titleService.setTitle("Comprehensive Diagnostics & Radiology Services - Rashtrotthana Hospital");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital provides top diagnostics and radiology services in Bangalore, ensuring accurate results and quality care.' });

  this.metaService.updateTag({ name: 'keywords', content: 'diagnostic services, radiology, multispeciality hospital, best diagnostics Bangalore' });

  }
  facilites:Facility[]=[
    {
      main_heading:'Radiology Services',
      heading:'Radiology Services',
      image_1:'radiology-service-1.png',
      image_2:'radiology-service-2.png',
      subFacilities:[
        {subHeading:'', subContent:'Rashtrotthana Hospital offers a wide range of radiology services to assist in accurate diagnosis and treatment planning. Cutting-edge imaging technology, including X-rays, ultrasounds, MRIs and CT scans, equips our advanced radiology department. Our team of experienced radiologists conducts each procedure with precision and care, providing reliable results for informed decision-making by our medical professionals.'}
        ,{
          subHeading:'Comprehensive diagnostic imaging solutions:',
          subContent:'Our radiology department provides comprehensive diagnostic imaging solutions to meet various medical needs. From detecting fractures and internal injuries to screening for underlying health conditions, our advanced imaging services offer invaluable insights. With a focus on timely and accurate diagnosis, we aim to support effective healthcare management and improve patient outcomes.'
        },
        {
          subHeading:'Patient-Focused Approach and Timely Results:',
          subContent:'At Rashtrotthana Hospital, we prioritize patient satisfaction and well-being. We have designed our radiology services with your comfort and convenience in mind. From scheduling appointments to delivering prompt results, we ensure a seamless experience for our patients. With our patient-focused approach and commitment to excellence, you can rely on us for accurate diagnostics and personalized care.'
        }
    ]
    }
  ];
}
