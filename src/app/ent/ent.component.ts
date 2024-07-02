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
      content:'The ENT department at JMRH boasts of an expert team of ENT surgeons, audiologists and therapists who are committed to deliver the highest quality of care. We treat all ENT, vertigo and voice problems. This includes endoscopic examinations. Microscopic ear surgeries, from ear drum repair to cochlear implants. The commonly performed surgeries are Mastoidectomy with Tympanoplasty, stapedotomy & Endoscopic sinus surgeries.',
      heading:'ENT',
      image:'ENT.png',
      Doctors:[
        {
          doctor_image:'Dr. H N Shyla.png',
          doctor_name:'Dr. H N Shyla'
        },
        {
          doctor_image:'Dr.Geethanjali K G.png',
          doctor_name:'Dr.Geethanjali K G<'
        }
      ]}];
}