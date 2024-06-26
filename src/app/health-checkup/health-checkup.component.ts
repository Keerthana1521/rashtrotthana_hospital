import { Component } from '@angular/core';

interface PackageDetails {
  title: string;
  items: string[];
  icon: string;
}

interface Package {
  title: string;
  price: number;
  package: PackageDetails[];
}

@Component({
  selector: 'app-health-checkup',
  templateUrl: './health-checkup.component.html',
  styleUrl: './health-checkup.component.css'
})
export class HealthCheckupComponent {
  activeIndex: number | null = null

  packages: Package[] = [
    {
      title: 'Basic Diabetic Care',
      price: 599,
      package: [
        {
          title: 'BLOOD Investigations',
          items: ['FBS', 'Lipid profile', 'PPBS', 'Serum Creatinine', ' HBA1C'],
          icon: 'blood'
        }
      ]
    },
    {
      title: 'Senior Citizen Health (Male)',
      price: 5000,
      package: [
        {
          title: 'BLOOD Investigations',
          items: ['Complete Blood count with ESR', 'Fasting Blood Sugar', 'Post prandial blood sugar', 'Complete Urine Examination', 'Complete Stool Examination Including occult blood', ' Lipid profile', 'Serum Creatinine', 'Vitamin D', 'HBA1C', 'TFT', 'Liver function test', 'PSA (For Male)'],
          icon: 'blood'
        },
        {
          title: 'RADIOLOGY',
          items: ['Ultrasound (Abd & Plv)', 'Chest X-Ray', 'Bone mineral Densitometry (Single Region)'],
          icon: 'radiology'
        },
        {
          title: 'CARDIAC EVALUATION',
          items: ['ECG', 'Echo OR TMT'],
          icon: 'cardiac'
        },
        {
          title: 'C',
          items: ['Physician', 'Ophthalmology', 'ENT', 'Life Style - Cognetive Fitness', 'Diet Counselling', 'Dental Check up'],
          icon: 'speciality'
        } 
      ]
    }
  ];

  getItemsCount(packages: PackageDetails[]): number {
    return packages.reduce((acc, curr) => acc + curr.items.length, 0);
  }

  toggleTab(event: Event, index: number) {
    event.stopPropagation();
    if (this.activeIndex === index) {
      this.activeIndex = -1;
    } else {
      this.activeIndex = index;
    }
  }

  preventDefault(event: Event) {
    event.preventDefault();
  }

  isTabActive(index: number): boolean {
    return this.activeIndex === index;
  }
}
