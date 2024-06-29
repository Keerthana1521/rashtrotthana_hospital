import { Component } from '@angular/core';
import { Facility } from '../facility.model';

@Component({
  selector: 'app-endoscopy',
  templateUrl: './endoscopy.component.html',
  styleUrl: './endoscopy.component.css'
})
export class EndoscopyComponent {
  facilites:Facility[]=[
    {
      main_heading:'Endoscopy',
      heading:'Endoscopy',
      image_1:'endoscopy-service-1.png',
      image_2:'endoscopy-service-2.png',
      subFacilities:[
        {
          subHeading:'Expert Endoscopy Services at Rashtrotthana Hospital:',
          subContent:'At Rashtrotthana Hospital, we offer expert endoscopy services to diagnose and treat various gastrointestinal conditions with precision and care. Skilled specialists staff our state-of-the-art endoscopy facility, utilizing advanced equipment and techniques to ensure accurate and thorough examinations. Our team is committed to delivering the highest quality of care in a comfortable and supportive environment, whether you need a routine screening or a diagnostic procedure.'
        },
        {
          subHeading:'Comprehensive diagnostic and therapeutic options:',
          subContent:'Endoscopy is a minimally invasive procedure that allows our specialists to examine the internal organs of the digestive tract using a flexible tube with a camera and light attached. This enables us to visualize and diagnose a wide range of conditions, including ulcers, polyps, inflammation, and cancer. In addition to diagnostic procedures, our endoscopy facility also offers therapeutic interventions such as polyp removal, tissue biopsies, and stent placement to address various gastrointestinal issues effectively.'
        },
        {
          subHeading:'Patient-centered care and support:',
          subContent:'At Rashtrotthana Hospital, we understand that undergoing an endoscopic procedure can be a source of anxiety for many patients. That s why our team is committed to providing compassionate care and support throughout your experience. From pre-procedure preparation to post-procedure follow-up, we prioritize your comfort and well-being every step of the way. Our goal is to ensure that you feel informed, empowered, and confident in your care decisions, allowing you to focus on your health with peace of mind.'
        }
      ]}];
}
