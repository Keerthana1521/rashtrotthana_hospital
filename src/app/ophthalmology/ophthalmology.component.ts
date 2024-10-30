import { Component } from '@angular/core';

@Component({
  selector: 'app-ophthalmology',
  templateUrl: './ophthalmology.component.html',
  styleUrl: './ophthalmology.component.css'
})
export class OphthalmologyComponent {
  specialities=[
    {
      main_heading:'Ophthalmology',
      content:'The Ophthalmology Department at Rashtrotthana Hospital delivers a full range of eye care services to diagnose, manage, and treat eye conditions, from common refractive errors to complex diseases. Our experienced team of ophthalmologists and optometrists offers personalized care in a state-of-the-art setting, equipped with advanced diagnostic tools for accurate and efficient evaluations. Conditions treated include cataracts, glaucoma, diabetic retinopathy, and macular degeneration, addressing each with comprehensive assessments and tailored treatment plans.Our department specializes in cataract and refractive surgeries, designed to restore vision and enhance patient\'s quality of life. Using minimally invasive techniques, our surgeons perform cataract extractions with precision, ensuring faster recovery and improved visual outcomes. ',
      content_1:'Refractive surgery options are also available, allowing patients to correct issues like myopia and hyperopia effectively. Furthermore, we prioritize preventive care, offering routine eye exams and screenings to detect early signs of eye disease, helping patients maintain their vision health over the long term.In addition to surgical services, Rashtrotthana Hospital’s Ophthalmology Department offers support for paediatric and geriatric eye care, understanding that different age groups require specialized approaches. Our dedicated optometrists provide corrective solutions like prescription glasses and contact lenses to meet everyday visual needs. With a patient-centered approach, the department aims to provide accessible, affordable, and high-quality eye care to all members of the community, making Rashtrotthana Hospital a trusted destination for complete vision care in Bangalore',
      heading:'Ophthalmology',
      image:'Ophthalmology.png',
      Doctors:[
        {
          doctor_image:'../../assets/doctor-45.png',
          doctor_name:'Dr. Sowmya Bhat S',
          experience : "10"
        }
      ]}];
}
