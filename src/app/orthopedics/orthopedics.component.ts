import { Component } from '@angular/core';

@Component({
  selector: 'app-orthopedics',
  templateUrl: './orthopedics.component.html',
  styleUrl: './orthopedics.component.css'
})
export class OrthopedicsComponent {
  specialities=[
    {
      main_heading:'Orthopedics',
      content:'General Medicine dept at JMRH also provides advanced medical treatment for Infectious diseases, metabolic disorders, lifestyle diseases & co-management of respiratory, gastro, cardiac, nephrology & neuro cases. For handling critical medical cases - dedicated 6 bedded Medical ICU is available & a High dependency unit (HDU) is also available for patients requiring continuous monitoring. General Medicine, also referred to as Internal Medicine, is a branch of medicine that deals with the prevention, diagnosis and the non-surgical treatments of diseases that are related to the internal organs.',
      heading:'Orthopedics',
      image:'Orthopedics.png',
      Doctors:[
        {
          doctor_image:'Dr. KRISHNASWAMY LAKSHMAN.png',
          doctor_name:'Dr. KRISHNASWAMY LAKSHMAN'
        },
        {
          doctor_image:'Dr. Atmaram D C.png',
          doctor_name:'Dr. Atmaram D C'
        }
      ]}];
}
