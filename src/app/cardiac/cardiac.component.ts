import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'; 


@Component({
  selector: 'app-cardiac',
  templateUrl: './cardiac.component.html',
  styleUrl: './cardiac.component.css'
})
export class CardiacComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    
  }
  ngOnInit(): void {
    this.titleService.setTitle("Best Heart | Cardiology Hospital in bangalore India ");  

  this.metaService.updateTag({ name: 'description', content: 'Discover world-class cardiac care at Rashtrotthana Hospital, the best heart hospital in India. Offering advanced treatments and expert cardiologists for your heart health.' });

  this.metaService.updateTag({ name: 'keywords', content: 'cardiology, heart hospital,cardiology hospital near me,heart hospital near me, cardiologists, heart attack, heart failure, heart pain, heart valve disease, congenital heart disease, coronary artery disease, heart rhythm disorders, disorders of heart failure, valvular disease' });

  }
  specialities=[
    {
      main_heading:'Cardiac Sciences',
      content:'Cardiology is a medical specialty that deals with disorders of the heart as well as some parts of the circulatory system. This can involve the diagnosis and treatment of structural or functional disorders that may require medical, interventional, or surgical treatment. A cardiologist is a medical professional who focuses only on cardiovascular illnesses and their treatment. The department of Cardiology is managed by a highly experienced professional team, who are dedicated to provide the best possible diagnostic & therapeutic care to each & every patient. The department is equipped with advanced diagnostic equipment for carrying out basic cardiac investigations like ECHO, TMT, ECG & Holter test.',
      heading:'Cardiac Sciences',
      image:'Cardiac Sciences.png',
      Doctors:[
        {
          doctor_image:'../../assets/doctor-37.png',
          doctor_name:'DR. Suhas Raj S'
        },
      ]}];
}
