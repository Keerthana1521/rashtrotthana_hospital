import { Component,OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {  
  constructor(private router: Router) {}
  @ViewChild('counterSection', { static: true }) counterSection!: ElementRef;
  stopcounters: any[] = [];
  doctors: number = 0;
  patients:number=0;
  established:number=0;
  bed:number=0;
  insurance:number=0;
  
  navigateToPage() {
    this.router.navigate(['/about-us']);
  }
  donate(){

    this.router.navigate(['/donation']);
  }
  emergency(){
    this.router.navigate(['/emergency']);
  }
  lab(){
    this.router.navigate(['/laboratory']);
  }
  radiology(){
    this.router.navigate(['/raidology']);
  }
  pharmacy(){
    this.router.navigate(['/pharmacy']);
  }
  dialysis(){
    this.router.navigate(['/dialysis']);
  }
  
  showContent: any = 'default';
  showTitle:any = 'default'
  showImage: any = 'default';

// counter:number= 0;
// stopcounter:any=setInterval(()=>{
// this.counter++;
// if(this.counter==100){
//   clearInterval(this.stopcounter);
// }
// },10);
  features = [
    {
      name: 'Yoga',
      icon: 'yoga.png',
      className: 'yoga',
      key: 'yoga',
      image: 'yoga-hover.png'
    },
    {
      name: 'Naturopathy',
      icon: 'naturopathy.png',
      className: 'naturopathy',
      key: 'naturopathy',
      image: 'naturopathy-hover.png'
    },
    {
      name: 'Modern Medicine',
      icon: 'modern medicine.png',
      className: 'modern-medicine',
      key: 'modern-medicine',
      image: 'modern-medicine-hover.png'
    },
    {
      name: 'Ayurveda',
      icon: 'ayurveda.png',
      className: 'ayurveda',
      key: 'ayurveda',
      image: 'ayurveda-hover.png'
    },
    {
      name: 'Homeopathy',
      icon: 'homeopathy.png',
      className: 'homeopathy',
      key: 'homeopathy',
      image: 'Homeopaathy-hover.png'
    }
  ];

  onMouseOver(key: string) {
    this.showContent = key;
    this.showTitle = key;
    this.showImage =  key;
  };

  onMouseOut(){
    this.showContent = 'default';
    this.showTitle = 'default';
    this.showImage = 'default';
  }

  content: any = {
    'default': 'India"s First Integrated Multispecialty Hospital Blending Modern And Traditional Medicine For Holistic Healing',
    'yoga': 'Yoga is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India. Yoga is one of the six Āstika schools of Indian philosophical traditions.',
    'naturopathy': 'Naturopathy or naturopathic medicine is a form of alternative medicine that employs an array of pseudoscientific practices branded as "natural", "non-invasive", or promoting "self-healing".',
    'modern-medicine': 'Modern medicine, or medicine as we know it, started to emerge after the Industrial Revolution in the 18th century. At this time, there was rapid growth in economic activity in Western Europe and the Americas.',
    'ayurveda': 'Ayurveda is a system of medicine with historical roots in the Indian subcontinent. Globalized and modernized practices derived from Ayurveda traditions are a type of alternative medicine.',
    'homeopathy': 'Homeopathy or homœopathy is a pseudoscientific system of alternative medicine. It was created in 1796 by Samuel Hahnemann. Its practitioners, called homeopaths, believe that a substance that causes symptoms of a disease in healthy people would cure similar symptoms in sick people.'
  };
  
title:any ={
  'default': '',
  'yoga': 'Yoga',
  'naturopathy': 'Naturopathy',
  'modern-medicine': 'Modern Medicine',
  'ayurveda': 'Ayurveda',
  'homeopathy': 'Homeopathy'
}
image:any ={
  'default': 'assets/sheild_num.png',
  'yoga': 'assets/yoga-outline.png',
  'naturopathy': 'assets/naturopathy-outline.png',
  'modern-medicine': 'assets/medicine-outline.png',
  'ayurveda': 'assets/ayurveda-outline.png',
  'homeopathy': 'assets/homeopathy-outline.png'
}
// <div class="box">
//         <img src="../../assets/doctor-icon.png">
//         <div class="number">
//             {{counter}}
//         </div>
//         <div class="statement">
//             Doctors At Work
//         </div>
//     </div>

ngOnInit(){
  const options = {
    root: null, // Use the viewport as the root
    threshold: 0.5 // Trigger when 50% of the section is visible
  };

  const observer = new IntersectionObserver(this.startCounter.bind(this), options);
    observer.observe(this.counterSection.nativeElement);

    console.log('Observer initialized');
}
startCounter(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
  entries.forEach(entry => {
    console.log('Intersection entry:', entry);
    if (entry.isIntersecting) {
      console.log('Section is intersecting, starting counter');

      this.incrementCounter(0);
      this.incrementCounter(1);
      this.incrementCounter(2);
      this.incrementCounter(3);
      this.incrementCounter(4);

      observer.unobserve(entry.target); // Stop observing once counter starts
    }
  });
}

incrementCounter(index: number) {
  this.stopcounters[index] = setInterval(() => {
    if (this.box[index].number < this.box[index].target) {
      this.box[index].number=this.box[index].number+1;
    } else {
      clearInterval(this.stopcounters[index]);
    }
  }, 10);
}

box=[{
  icon:'doctor-icon.png',
  number:0,
  target:100,
  statement:'Doctors at work',
  showPlus: true 
},
{
  icon:'patient-icon.png',
  number:0,
  target:20000,
  statement:'Happy Patients',
  showPlus: true 
},
{
  icon:'hospital-icon.png',
  number:0,
  target:2022,
  statement:'Established'
},
{
  icon:'bed-icon.png',
  number:0,
  target:150,
  statement:'Medical Beds',
  showPlus: true 
},
{
  icon:'Staff.png',
  number:0,
  target:25,
  statement:'Insurance Tie Up '
}
]
}
