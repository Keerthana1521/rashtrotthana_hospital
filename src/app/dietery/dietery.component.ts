import { Component } from '@angular/core';

@Component({
  selector: 'app-dietery',
  templateUrl: './dietery.component.html',
  styleUrl: './dietery.component.css'
})
export class DieteryComponent {
  facilites=[
    {
      main_heading:'Dietary',
      heading:'Dietary',
     content:'At Rashtrotthana Hospital, our canteen serves up a variety of tasty and nutritious meals for patients, visitors, and staff. We focus on quality ingredients and hygienic preparation to ensure everyone can enjoy a satisfying meal. Whether you re in for a quick bite or a hearty meal, our canteen is here to provide you with convenient and delicious options throughout your time at the hospital.',
      image_1:'dietery-service-1.png',
      image_2:'dietery-service-2.png'
    }
  ];
}
