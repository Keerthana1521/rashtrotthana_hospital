import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-specalities',
  templateUrl: './specalities.component.html',
  styleUrl: './specalities.component.css'
})
export class SpecalitiesComponent {
  constructor(private router: Router) {}
    
  
  modernMedicine(){
    this.router.navigate(['/modern-medicine']);
  }
  yoga(){
    this.router.navigate(['/yoga']);
  }
  ayurveda(){
    this.router.navigate(['/ayurveda']);
  }
  homeopathy(){
    this.router.navigate(['/homeopathy']);
  }
  naturopathy(){
    this.router.navigate(['/naturopathy']);
  }
}
