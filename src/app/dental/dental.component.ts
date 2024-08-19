import { Component } from '@angular/core';

@Component({
  selector: 'app-dental',
  templateUrl: './dental.component.html',
  styleUrl: './dental.component.css'
})
export class DentalComponent {
  specialities=[
    {
      main_heading:'Dental Sciences',
      content:'The Art of restoring smiles: Department of Dental Surgery is a state of the art Dental facility well equipped to provide treatment for all types of dental ailments. From Basic Outpatient dental procedures like restoration of dental cavities, tooth extractions to complex procedures like Dental Implants available at affordable cost. The In-house Oral & Maxillo Surgery team also provides accident & trauma care round the clock. All Sub-specialisations of Dentistry, namely: Orthodontics, Pedodontics, Periodontics, Prosthodontics, Endodontics & Implantology specialist are available. Emphasizing the importance of Oral Health - regular dental health camps are conducted in association with old age homes, health clubs & etc..',
      heading:'Dental Sciences',
      image:'Dental Sciences.png',
      Doctors:[
        {
          doctor_image:'Dr. H N Shyla.png',
          doctor_name:'Dr. H. N. Shyla'
        },
        {
          doctor_image:'Dr.Geethanjali K G.png',
          doctor_name:'Dr. Geethanjali K. G.'
        }
      ]}];
}
