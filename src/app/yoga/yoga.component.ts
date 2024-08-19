import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'; 

@Component({
  selector: 'app-yoga',
  templateUrl: './yoga.component.html',
  styleUrl: './yoga.component.css'
})
export class YogaComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    
  }
  ngOnInit(): void {
    this.titleService.setTitle("Therapeutic Yoga & Wellness Programs - Rashtrotthana Hospital Bangalore");  

  this.metaService.updateTag({ name: 'description', content: 'Enhance your well-being with therapeutic yoga sessions at Rashtrotthana Hospital in Bangalore, designed for holistic health.' });

  this.metaService.updateTag({ name: 'keywords', content: 'yoga therapy, wellness programs, yoga classes Bangalore' });

  }

  doctors =[
    {
      image : '../../assets/doctor-14.png',
      name : "Dr. Suvarnini Konale",
      section : "BAMS, M.D. (Ayurveda)",
      designation : "LIFESTYLE MEDICINE",
    }
  ]
}
