import { Component } from '@angular/core';

@Component({
  selector: 'app-homeopathy',
  templateUrl: './homeopathy.component.html',
  styleUrl: './homeopathy.component.css'
})
export class HomeopathyComponent {

  doctors =[
    {
      image : '../../assets/doctor-39.png',
      name : "Dr. Anusha Mutalik Desai",
      section : "BHMS, MD(HOM)",
      designation : "HOMEOPATHY",
    }
  ]

}
