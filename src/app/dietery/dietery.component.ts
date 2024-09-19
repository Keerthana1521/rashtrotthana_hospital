import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'; 


@Component({
  selector: 'app-dietery',
  templateUrl: './dietery.component.html',
  styleUrl: './dietery.component.css'
})
export class DieteryComponent {constructor(private titleService: Title, private metaService: Meta) {
    
}
ngOnInit(): void {
  this.titleService.setTitle("Expert Dietary & Clinical Nutrition Services - Rashtrotthana Hospital");  

this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital provides personalized dietary and clinical nutrition services in Bangalore, tailored to support patient health and recovery.' });

this.metaService.updateTag({ name: 'keywords', content: 'dietary services, clinical nutrition, healthy diet, hospital nutrition Bangalore' });

}
  facilites=[
    {
      main_heading:'Dietary',
      heading:'Dietary',
     content:'At Rashtrotthana Hospital, our canteen serves up a variety of tasty and nutritious meals for patients, visitors, and staff. We focus on quality ingredients and hygienic preparation to ensure everyone can enjoy a satisfying meal. Whether you are in for a quick bite or a hearty meal, our canteen is here to provide you with convenient and delicious options throughout your time at the hospital.',
      image_1:'dietery-service-1.png',
      image_2:'dietery-service-2.png',
       bg_image:'dietery-bg.png'
    }
  ];
}
