
import { Facility } from '../facility.model';
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'; 

@Component({
  selector: 'app-in-patient',
  templateUrl: './in-patient.component.html',
  styleUrl: './in-patient.component.css'
})
export class InPatientComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    
  }
  ngOnInit(): void {
    this.titleService.setTitle("Comfortable In-Patient Facilities - Rashtrotthana Hospital Bangalore");  

  this.metaService.updateTag({ name: 'description', content: 'Experience quality in-patient care with comfortable rooms and comprehensive services at Rashtrotthana Hospital, Bangalore.' });

  this.metaService.updateTag({ name: 'keywords', content: 'in-patient care, hospital stay, best hospital Bangalore, patient rooms' });

  }

  facilites:Facility[]=[
    {
      main_heading:'In-patient facility',
      heading:'In-patient facility',
      image_1:'',
      image_2:'',
      subFacilities:[
        {subHeading:'Comfort and Care at Rashtrotthana Hospital:', subContent:'At Rashtrotthana Hospital, we understand that your comfort and well-being are paramount during your stay with us. Our in-patient facilities are designed to provide you with a serene and welcoming environment conducive to healing and recovery. We thoughtfully furnish each private room with modern amenities to ensure your comfort throughout your stay. From cozy bedding to personalized care, we strive to create a home-like atmosphere where you can focus on your health with peace of mind.'}
        ,{
          subHeading:'Personalized Attention from Our Dedicated Staff:',
          subContent:'Our team of compassionate healthcare professionals is committed to providing personalized attention to every patient. From skilled nurses to attentive support staff, we are here to cater to your individual needs and preferences. Whether you require assistance with daily tasks or have specific medical requirements, our dedicated team is available around the clock to ensure your comfort and well-being. At Rashtrotthana Hospital, you can rest assured that you will receive the highest standard of care in a supportive and nurturing environment.'
        },
        {
          subHeading:'Advanced Medical Technology for Comprehensive Care:',
          subContent:'Rashtrotthana Hospital supports comprehensive and advanced care with its state-of-the-art medical technology and dedicated staff. Our in-patient facilities feature advanced monitoring systems and medical equipment to ensure accurate diagnosis and effective treatment. From cutting-edge surgical suites to specialized medical units, we have the resources and expertise to address a wide range of healthcare needs. We are committed to providing you with the highest quality of care, utilizing the latest advancements in medical technology to promote your health and well-being.'
        }
    ]
    }
  ];
 
  
}
