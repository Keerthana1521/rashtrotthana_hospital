import { Component } from '@angular/core';

@Component({
  selector: 'app-cardiac',
  templateUrl: './cardiac.component.html',
  styleUrl: './cardiac.component.css'
})
export class CardiacComponent {
  specialities=[
    {
      main_heading:'Cardiac Sciences',
      content:'Cardiology is a medical specialty that deals with disorders of the heart as well as some parts of the circulatory system. This can involve the diagnosis and treatment of structural or functional disorders that may require medical, interventional, or surgical treatment. A cardiologist is a medical professional who focuses only on cardiovascular illnesses and their treatment. The department of Cardiology at JMRH is managed by a highly experienced professional team, who are dedicated to provide the best possible diagnostic & therapeutic care to each & every patient. The department is equipped with advanced diagnostic equipment for carrying out basic cardiac investigations like ECHO, TMT, ECG & Holter test.',
      heading:'Cardiac Sciences',
      image:'Cardiac Sciences.png',
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
