import { Component } from '@angular/core';

@Component({
  selector: 'app-operation-theatre',
  templateUrl: './operation-theatre.component.html',
  styleUrl: './operation-theatre.component.css'
})
export class OperationTheatreComponent {
  facilites=[
    {
      main_heading:'Operation Theatre',
      heading:'Operation Theatre',
      content:'State of the Art Modular OT 5 Major & 1 Minor OT - fully equipped meeting requirements for all Major Surgeries. Working round the clock. Certified & experienced OT staff.',
      image_1:'operation-theatre-1.png',
      image_2:'operation-theatre-2.png'
    }
  ];
}
