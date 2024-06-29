import { Component } from '@angular/core';

@Component({
  selector: 'app-urology',
  templateUrl: './urology.component.html',
  styleUrl: './urology.component.css'
})
export class UrologyComponent {
  specialities=[
    {
      main_heading:'Urology',
      content:'Urology is the surgical specialty that focuses on the male & female urinary tract and on the reproductive system of males. The Urology Department at JMRH is an extensive surgical department equipped to handle all types of urological issues right from basic urological diagnosis to complex procedures including laparoscopic & laser surgeries. The specialist expertise in treatment of prostate (TURP), kidney stones, cancers related to kidney & bladder, Hydrocoele, urethroplasty & etc.',
      heading:'Urology',
      image:'Urology.png',
      Doctors:[
        {
          doctor_image:'Dr.Madhu S N .png',
          doctor_name:'Dr.Madhu S N'
        },
        {
          doctor_image:'Dr. Nagaraj Rao.png',
          doctor_name:'Dr. Nagaraj Rao'
        }
      ]}];
}
