import { Component } from '@angular/core';

@Component({
  selector: 'app-ayurvedha-doctors-carousel',
  templateUrl: './ayurvedha-doctors-carousel.component.html',
  styleUrl: './ayurvedha-doctors-carousel.component.css'
})
export class AyurvedhaDoctorsCarouselComponent {
  doctors = [
    {
      image : '../../assets/Ayurveda-doctors/Dr.RohithKR.png',
      name : "Dr. Rohith K R",
      section : "BAMS",
      designation : "Resident Medical Officer ",
      Department : "Agnivesha Institute Of Ayurveda"
    },
    {
      image : '../../assets/Ayurveda-doctors/dummy.png',
      name : "Dr. Shamantha",
      section : "BAMS",
      designation : "Resident Medical Officer",
      Department : "Agnivesha Institute Of Ayurveda"
    },
    {
      image : '../../assets/Ayurveda-doctors/Dr.Alekhya.png',
      name : "Dr. Alekhya R",
      section : "BAMS",
      designation : "Resident Medical Officer",
      Department : "Agnivesha Institute Of Ayurveda"
    }
  ]
}
