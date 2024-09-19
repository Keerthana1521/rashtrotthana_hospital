import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'; 

@Component({
  selector: 'app-operation-theatre',
  templateUrl: './operation-theatre.component.html',
  styleUrl: './operation-theatre.component.css'
})
export class OperationTheatreComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    
  }
  ngOnInit(): void {
    this.titleService.setTitle("Advanced Operation Theatres for Safe Surgeries - Rashtrotthana Hospital Bangalore");  

  this.metaService.updateTag({ name: 'description', content: 'Experience safe and precise surgeries at Rashtrotthana Hospital\'s state-of-the-art operation theatres in Bangalore.' });

  this.metaService.updateTag({ name: 'keywords', content: 'advanced operation theatre, surgical care, best hospital Bangalore, multispeciality surgery' });

  }
  facilites=[
    {
      main_heading:'Operation Theatre',
      heading:'Operation Theatre',
      content:'State of the Art Modular OT 5 Major & 1 Minor OT - fully equipped meeting requirements for all Major Surgeries working round the clock. Certified & experienced OT staff.',
      image_1:'operation-theatre-1.png',
      image_2:'operation-theatre-2.png',
       bg_image:'facilities-bg.png'
    }
  ];
}
