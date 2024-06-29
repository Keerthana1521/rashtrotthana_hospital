import { Component } from '@angular/core';

@Component({
  selector: 'app-general-medicine',
  templateUrl: './general-medicine.component.html',
  styleUrl: './general-medicine.component.css'
})
export class GeneralMedicineComponent {
  specialities=[
    {
      main_heading:'General Medicine',
      content:'General Medicine dept at JMRH also provides advanced medical treatment for Infectious diseases, metabolic disorders, lifestyle diseases & co-management of respiratory, gastro, cardiac, nephrology & neuro cases. For handling critical medical cases - dedicated 6 bedded Medical ICU is available & a High dependency unit (HDU) is also available for patients requiring continuous monitoring. General Medicine, also referred to as Internal Medicine, is a branch of medicine that deals with the prevention, diagnosis and the non-surgical treatments of diseases that are related to the internal organs.',
      heading:'General Medicine',
      image:'Gm_page_img.jfif',
      Doctors:[
        {
          doctor_image:'gm_doctor.png',
          doctor_name:'Dr. Sindhu P Madanshetty'
        }
      ]}];
}
