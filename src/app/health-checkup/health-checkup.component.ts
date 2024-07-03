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
          title: 'BLOOD INVESTIGATIONS',
          items: ['FBS', 'Lipid profile', 'PPBS', 'Serum Creatinine', ' HBA1C'],
          icon: 'blood'
        }
      ]
    },
    {
      title: 'Senior Citizen Health (Male)',
      price: 5500,
      package: [
        {
          title: 'BLOOD INVESTIGATIONS',
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
          title:' SPECIALTY CONSULTATIONS',
          items: ['Physician', 'Ophthalmology', 'ENT', 'Life Style - Cognetive Fitness', 'Diet Counselling', 'Dental Check up'],
          icon: 'speciality'
        } 
      ]
    },
    {
      title: 'Senior Citizen Health Check (Female)',
      price: 5500,
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
          title: ' SPECIALTY CONSULTATIONS',
          items: ['Physician', 'Ophthalmology', 'ENT', 'Life Style - Cognetive Fitness', 'Diet Counselling', 'Dental Check up','Gynecology'],
          icon: 'speciality'
        } 
      ]
    },
    {
      title: 'BASIC Health Check Up',
      price: 950,
      package: [
        {
          title: 'BLOOD INVESTIGATIONS',
          items: ['Complete Blood count with ESR', 'Fasting Blood Sugar', 'Total Cholesterol', ' Urine Routine', 'Blood grouping & RH Typing', 'Serum Creatinine', 'TSH'],
          icon: 'blood'
        },
        {
          title: 'RADIOLOGY',
          items: [ 'Chest X-Ray'],
          icon: 'radiology'
        },
        {
          title: 'CARDIAC EVALUATION',
          items: ['ECG'],
          icon: 'cardiac'
        },
        {
          title: ' SPECIALTY CONSULTATIONS',
          items: ['Physician', 'Eye Check / Vision Test'],
          icon: 'speciality'
        } 
      ]
    },
    {
      title: 'Executive Health Check Up (Male)',
      price: 4200,
      package: [
        {
          title: 'BLOOD INVESTIGATIONS',
          items: ['Complete Blood count with ESR', 'Fasting Blood Sugar', 'Post prandial blood sugar','Complete Hemogram ', 'Complete Urine Examination', 'Complete Stool Examination Including occult blood', ' Lipid profile', 'Serum Creatinine', 'Vitamin D', 'HBA1C', 'TFT', 'Liver function test', 'PSA (For Male)'],
          icon: 'blood'
        },
        {
          title: 'RADIOLOGY',
          items: ['Ultrasound (Abd & Plv)', 'Chest X-Ray'],
          icon: 'radiology'
        },
        {
          title: 'CARDIAC EVALUATION',
          items: ['ECG', 'Echo OR TMT'],
          icon: 'cardiac'
        },
        {
          title:' SPECIALTY CONSULTATIONS',
          items: ['Physician', 'Ophthalmology', 'ENT', 'Life Style - Cognetive Fitness', 'Diet Counselling', 'Dental Check up'],
          icon: 'speciality'
        } 
      ]
    },
    {
      title: 'Master Health Check Up',
      price: 2600,
      package: [
        {
          title: 'BLOOD INVESTIGATIONS',
          items: ['Complete Blood count with ESR', 'Fasting Blood Sugar', 'Post prandial blood sugar', 'Complete Urine Examination', ' Lipid profile', 'Serum Creatinine','TFT','TSH'],
          icon: 'blood'
        },
        {
          title: 'RADIOLOGY',
          items: ['Ultrasound (Abd & Plv)', 'Chest X-Ray'],
          icon: 'radiology'
        },
        {
          title: 'CARDIAC EVALUATION',
          items: ['ECG', 'Echo OR TMT'],
          icon: 'cardiac'
        },
        {
          title:' SPECIALTY CONSULTATIONS',
          items: ['Physician', 'Ophthalmology', 'ENT', 'Life Style - Cognetive Fitness', 'Diet Counselling', 'Dental Check up'],
          icon: 'speciality'
        } 
      ]
    },
    {
      title: 'Executive Health Check Up (Female)',
      price: 4500,
      package: [
        {
          title: 'BLOOD INVESTIGATIONS',
          items: [ 'Fasting Blood Sugar', 'Post prandial blood sugar', 'Complete Urine Examination','Creatinine','Complete Hemogram', ' Lipid profile', 'Pap Smear','TFT','LFT'],
          icon: 'blood'
        },
        {
          title: 'RADIOLOGY',
          items: ['Ultrasound (Abd & Plv)', 'Chest X-Ray','MamoGraphy'],
          icon: 'radiology'
        },
        {
          title: 'CARDIAC EVALUATION',
          items: ['ECG', 'Echo OR TMT'],
          icon: 'cardiac'
        },
        {
          title:' SPECIALTY CONSULTATIONS',
          items: ['Physician', 'Ophthalmology', 'ENT', 'Life Style - Cognetive Fitness', 'Diet Counselling', 'Dental Check up'],
          icon: 'speciality'
        } 
      ]
    },
    {
      title: 'Well Women check up',
      price: 3000,
      package: [
        {
          title: 'BLOOD INVESTIGATIONS',
          items: [ 'Fasting Blood Sugar', 'Post prandial blood sugar','CBC','Sr Creatinine','Urine Routine', ' Lipid profile', 'Pap Smear','TFT','LFT'],
          icon: 'blood'
        },
        {
          title: 'RADIOLOGY',
          items: ['Ultrasound (Abd & Plv)', 'Chest X-Ray','Thermal Breast Creaming'],
          icon: 'radiology'
        },
        {
          title: 'CARDIAC EVALUATION',
          items: ['ECG'],
          icon: 'cardiac'
        },
        {
          title:' SPECIALTY CONSULTATIONS',
          items: ['Physician', 'Gynecologist', 'ENT', 'Life Style - Cognetive Fitness', 'Diet Counselling', 'Dental Check up'],
          icon: 'speciality'
        } 
      ]
    },
    {
      title: 'Comprehensive Diabetic check',
      price: 4000,
      package: [
        {
          title: 'BLOOD INVESTIGATIONS',
          items: [ 'Fasting Blood Sugar','Uric Acid','Complete Blood Count with ESR', 'Post prandial blood sugar','Complete Urine Examination','Sr Creatinine','HBA1C','TSH','Blood Urea','Electrolytes','Urine Microalbumin','Urine Creatinine', 'Microalbumin / Creatinine Ratio (random Urine)',' Lipid profile', 'Pap Smear','TFT','LFT'],
          icon: 'blood'
        },
        {
          title: 'RADIOLOGY',
          items: ['Ultrasound (Abd & Plv)', 'Chest X-Ray'],
          icon: 'radiology'
        },
        {
          title: 'CARDIAC EVALUATION',
          items: ['ECG', 'Echo or TMT'],
          icon: 'cardiac'
        },
        {
          title:' SPECIALTY CONSULTATIONS',
          items: ['Physician', 'Ophthalmology', 'ENT', 'Life Style - Cognetive Fitness', 'Diet Counselling', 'Dental Check up'],
          icon: 'speciality'
        } 
      ]
    },

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
