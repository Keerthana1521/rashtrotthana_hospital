import { Component } from '@angular/core';

@Component({
  selector: 'app-gastrosciences',
  templateUrl: './gastrosciences.component.html',
  styleUrl: './gastrosciences.component.css'
})
export class GastrosciencesComponent {
  specialities=[
    {
      main_heading:'Gastrosciences',
      content:'Comprehensive Medical & Surgical Gastroenterology services under one roof. Competent, talented & experienced professionals manage any kind of gastro-intestinal & liver disorders and its complications. High precision instruments along with video navigation tools for minimally invasive diagnosis & treatment are available. Diagnostic & Surgical treatments available under the department of Gastro Sciences at JMRH: Endoscopy, Colonoscopy,Sigmoidoscopy, video proctoscopy. Laparoscopic cholecystectomy, Proctology, Breast Laparoscopy & all types of hernia treatment.',
      heading:'Gastrosciences',
      image:'Gastrosciences.png',
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
