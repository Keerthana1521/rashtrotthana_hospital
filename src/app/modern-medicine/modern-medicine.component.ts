import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modern-medicine',
  templateUrl: './modern-medicine.component.html',
  styleUrl: './modern-medicine.component.css'
})
export class ModernMedicineComponent {
  constructor(private router: Router) {}
  box =[
    {
      name: 'card',
      image: '../../assets/modern-1.png',
      title: 'general medicine',
      button_text: 'Read More',
      route: 'general-medicine'
    },
    {
      name: 'card',
      image: '../../assets/modern-2.png',
      title: 'General Surgery',
      button_text: 'Read More',
      route: 'general-surgery'
    },
    {
      name: 'card',
      image: '../../assets/modern-3.png',
      title: 'Obstetrics & Gynecology',
      button_text: 'Read More'
    },
    {
      name: 'card',
      image: '../../assets/modern-4.png',
      title: 'Paediatrics & Neonatology',
      button_text: 'Read More',
      route: 'paediatrics'
    },
    {
      name: 'card',
      image: '../../assets/modern-5.png',
      title: 'Nephrology',
      button_text: 'Read More',
      route: 'nephrology'
    },
    {
      name: 'card',
      image: '../../assets/modern-6.png',
      title: 'Urology',
      button_text: 'Read More',
      route: 'urology'

    },
    {
      name: 'card',
      image: '../../assets/modern-7.png',
      title: 'Orthopedics',
      button_text: 'Read More',
      route:'orthopedics'
    },
    {
      name: 'card',
      image: '../../assets/modern-8.png',
      title: 'Gastro Sciences',
      button_text: 'Read More',
      route:'gastroscience'
    },
    {
      name: 'card',
      image: '../../assets/modern-9.png',
      title: 'Cardiac sciences',
      button_text: 'Read More',
      route:'cardiacscience'
    },
    {
      name: 'card',
      image: '../../assets/modern-10.png',
      title: 'Pulmonology',
      button_text: 'Read More',
      route:'pulmonology'
    },
    {
      name: 'card',
      image: '../../assets/modern-11.png',
      title: 'Ophthalmology',
      button_text: 'Read More',
      route:'ophthalmology'
    },
    {
      name: 'card',
      image: '../../assets/modern-12.png',
      title: 'Dental Sciences',
      button_text: 'Read More',
      route:'dental'
    },
    {
      name: 'card',
      image: '../../assets/modern-13.png',
      title: 'ENT Specialty',
      button_text: 'Read More',
      route:'ent'
    },
    {
      name: 'card',
      image: '../../assets/modern-14.png',
      title: 'Neurosciences',
      button_text: 'Read More',
      route:'neuroscience'
    },
    {
      name: 'card',
      image: '../../assets/modern-15.png',
      title: 'Endocrinology',
      button_text: 'Read More',
      route:'nutrition'
    },
    {
      name: 'card',
      image: '../../assets/modern-16.png',
      title: 'Psychiatry',
      button_text: 'Read More',
      route:'psychiatry'
    },
    {
      name: 'card',
      image: '../../assets/modern-17.png',
      title: 'Oncology',
      button_text: 'Read More',
      route:'oncology'
    },
    {
      name: 'card',
      image: '../../assets/modern-18.png',
      title: 'Anesthesiology',
      button_text: 'Read More',
      route:'nutrition'
    },
    {
      name: 'card',
      image: '../../assets/modern-19.png',
      title: 'emergency medicine',
      button_text: 'Read More',
      route:'emergency-medicine'
    }

    
  ]
  hoverBoxes = [
    { image: 'assets/modern-hover-1.png' },
    { image: 'assets/modern-hover-2.png' },
    { image: 'assets/modern-hover-3.png' },
    { image: 'assets/modern-hover-4.png' },
    { image: 'assets/modern-hover-5.png' },
    { image: 'assets/modern-hover-6.png' },
    { image: 'assets/modern-hover-7.png' },
    { image: 'assets/modern-hover-8.png' },
    { image: 'assets/modern-hover-9.png' },
    { image: 'assets/modern-hover-10.png' },
    { image: 'assets/modern-hover-11.png' },
    { image: 'assets/modern-hover-12.png' },
    { image: 'assets/modern-hover-13.png' },
    { image: 'assets/modern-hover-14.png' },
    { image: 'assets/modern-hover-15.png' },
    { image: 'assets/modern-hover-16.png' },
    { image: 'assets/modern-hover-17.png' },
    { image: 'assets/modern-hover-18.png' },
    { image: 'assets/modern-hover-19.png' },
    
  ];
  activeHoverIndex: number | null = null;

  onMouseOver(index: number) {
    this.activeHoverIndex = index;
  }

  onMouseOut() {
    this.activeHoverIndex = null;
  }
  onButtonClick(route?: string) {
    if (route) {
      this.router.navigate([route]);
    } else {
      console.error('No route provided');
    }
  }
}
