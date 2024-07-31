import { Component } from '@angular/core';

@Component({
  selector: 'app-naturopathy',
  templateUrl: './naturopathy.component.html',
  styleUrl: './naturopathy.component.css'
})
export class NaturopathyComponent {
  doctors =[
    {
      image : '../../assets/doctor-14.png',
      name : "Dr. Suvarnini Konale",
      section : "BNYS",
      designation : "LIFESTYLE MEDICINE",
    },
    {
      image : '../../assets/doctor-43.png',
      name : "Dr. Varsha P ",
      section : "BNYS",
      designation : "LIFESTYLE MEDICINE",
    },
    {
      image : '../../assets/dummy.png',
      name : "Dr. Shamantha",
      section : "BAMS",
      designation : "LIFESTYLE MEDICINE",
      Department : "Agnivesha Institute Of Ayurveda"
    }
  ]
}
