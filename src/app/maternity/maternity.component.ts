import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maternity',
  templateUrl: './maternity.component.html',
  styleUrl: './maternity.component.css'
})
export class MaternityComponent {
  constructor(private router: Router) { 

  }
  contact(){
    this.router.navigate(['/contact-us-bangalore']);
  }
    doctors = [
      {
        image : "assets/doctor-2.png",
        name : "Dr. Latha Venkataram",
        experience : "Years of Experience: 32"
      },
      {
        image : "assets/doctor-10.png",
        name : "Dr. Shreelakshmi G",
        experience : "Years of Experience: 20"
      },
      {
        image : "assets/doctor-12.png",
        name : "Dr. Prakruthi",
        experience : "Years of Experience: 16"
      }
    ]
    doctors2 = [
      {
        image : "assets/doctor-13.png",
        name : "Dr. Neelam Saraswat",
        experience : "Years of Experience: 10"
      },
      {
        image : "assets/doctor-15.png",
        name : "Dr. Ashwitha Gundmi",
        experience : "Years of Experience: 7+"
      },
      {
        image : "assets/doctor-33.png",
        name : "Dr. Vinita Udupa",
        experience : "Years of Experience: 8"
      }
    ]
}
