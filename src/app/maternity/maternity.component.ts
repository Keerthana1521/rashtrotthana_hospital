import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 

@Component({
  selector: 'app-maternity',
  templateUrl: './maternity.component.html',
  styleUrl: './maternity.component.css'
})
export class MaternityComponent {
  constructor(private router: Router,private titleService: Title, private metaService: Meta) { 
    this.titleService.setTitle("Comprehensive Maternity Care | Rashtrotthana Hospital");  

    this.metaService.updateTag({ name: 'description', content: 'Trusted maternity care with advanced prenatal services, labor support and postpartum care for mother and baby safety.' });
  
    this.metaService.updateTag({ name: 'keywords', content: 'Maternity care, prenatal care, delivery services, postnatal care, maternity hospital, Rashtrotthana Hospital, yoga benefits, pregnancy care' });
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
