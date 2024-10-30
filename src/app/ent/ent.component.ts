import { Component } from '@angular/core';

@Component({
  selector: 'app-ent',
  templateUrl: './ent.component.html',
  styleUrl: './ent.component.css'
})
export class ENTComponent {
  specialities=[
    {
      main_heading:'ENT',
      content:'The ENT Department at Rashtrotthana Hospital is committed to providing comprehensive care for a wide range of ear, nose, and throat conditions. Our highly skilled team of ENT surgeons, audiologists, and therapists works collaboratively to diagnose and treat both common and complex ENT disorders. With cutting-edge facilities, we manage conditions such as chronic ear infections, hearing loss, sinusitis, throat disorders and vertigo. Our team conducts specialized diagnostic exams, including endoscopy, for in-depth examination and precise diagnosis, ensuring each patient receives a personalized treatment plan tailored to their unique needs. From simple issues like seasonal allergies to complex surgical requirements, our ENT department is dedicated to holistic care and long-term solutions.Our ENT department is known for advanced surgical procedures, including microscopic ear surgeries, endoscopic sinus surgeries, and cochlear implants. Frequently performed surgeries, such as mastoidectomy with tympanoplasty and stapedectomy, allow us to address critical issues like eardrum repair and chronic infections. ',
      content_1:' These minimally invasive options are designed for patient comfort and facilitate faster recovery. Additionally, our department offers treatments for voice and balance disorders, addressing a broad spectrum of ENT-related issues with specialized care for vocal cord conditions, tinnitus, and dizziness. Our post-surgical care ensures thorough recovery and follow-up, offering support at every stage of healing.Beyond direct treatment, the ENT department focuses on patient education, empowering individuals to manage chronic conditions and minimize future complications. Through a combination of advanced technology, experienced specialists, and a patient-first approach, Rashtrotthana Hospital’s ENT Department is dedicated to improving quality of life for patients of all ages. We are proud to be a trusted provider of ENT services in the community, helping patients find relief, recover and lead healthier lives.',
      heading:'ENT',
      image:'ENT.png',
      Doctors:[
        {
          doctor_image:'../../assets/doctor-44.png',
          doctor_name:'Dr. Manasa N. A',
          experience : "7"
        },
        {
          doctor_image:'../../assets/doctor-35.png',
          doctor_name:'Dr. Narendranath A',
          experience : "10"
        },
        {
          doctor_image:'../../assets/doctor-34.png',
          doctor_name:'Dr. Ashika Bagaria',
          experience : "2"
        }      ]}];
}
