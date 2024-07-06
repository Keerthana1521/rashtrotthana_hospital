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
    console.log('donate')
    this.router.navigate(['/modern-medicine']);
  }
}
