import { Component } from '@angular/core';

@Component({
  selector: 'app-oncology',
  templateUrl: './oncology.component.html',
  styleUrl: './oncology.component.css'
})
export class OncologyComponent {
  specialities=[
    {
      main_heading:'Oncology',
      content:'The Oncology Department at Rashtrotthana Hospital is committed to offering comprehensive care to patients suffering from various types of cancer. We understand the challenges associated with cancer diagnosis and treatment and we strive to offer personalized care and support to our patients and their families throughout their journey to recovery. One of India s major challenges is the lack of awareness and screening programs for cancer, which leads to delayed diagnosis and treatment. Through various initiatives and awareness programs, we are committed to raising awareness about cancer and the importance of early detection.',
      heading:'Oncology',
      image:'Oncology.png',
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