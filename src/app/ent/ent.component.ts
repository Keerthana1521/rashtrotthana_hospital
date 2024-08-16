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
      content:'The ENT department boasts of an expert team of ENT surgeons, audiologists and therapists who are committed to deliver the highest quality of care. We treat all ENT, vertigo and voice problems. This includes endoscopic examinations. Microscopic ear surgeries, from ear drum repair to cochlear implants. The commonly performed surgeries are Mastoidectomy with Tympanoplasty, stapedotomy & Endoscopic sinus surgeries.',
      heading:'ENT',
      image:'ENT.png',
      Doctors:[
        {
          doctor_image:'../../assets/doctor-44.png',
          doctor_name:'Dr. Manasa N A'
        },
        {
          doctor_image:'../../assets/doctor-35.png',
          doctor_name:'Dr. Narendranath A'
        },
        {
          doctor_image:'../../assets/doctor-34.png',
          doctor_name:'Dr. Ashika Bagaria'
        }      ]}];
}
