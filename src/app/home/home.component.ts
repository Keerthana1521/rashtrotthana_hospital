import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {  
  counter: number = 0;
  endValue: number = 100;
  duration: number = 3000;
  showContent: any = 'default';
  showTitle:any = 'default'
  showImage: any = 'default';
  // <div class="number-one">
  //               <img class="sheild" src="../../assets/sheild_num.png">
  //           </div>
// numberOne =[
//   {
//     name:'Yoga',
//     icon: 'yoga-outline.png',
//     key: 'yoga',
//   },
//   {
//     name:'Naturopathy',
//     icon: 'naturo-outline.png',
//     key: 'naturopathy',
//   },
//   {
//     name:'Modern Medicine',
//     icon: 'modern-outline.png',
//     key: 'modern-medicine',
//   },
//   {
//     name:'Ayurveda',
//     icon: 'ayurveda-outline.png',
//     key: 'ayurveda',
//   },
//   {
//     name:'Homeopathy',
//     icon: 'homeopathy-outline.png',
//     key: 'homeopathy',
//   }
// ]
startCounter() {
  const interval = this.duration / this.endValue;
  const timer = setInterval(() => {
    this.counter++;
    if (this.counter >= this.endValue) {
      clearInterval(timer);
    }
  }, interval);
}
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
box=[{
  icon:'doctor-icon.png',
  number:this.counter,
  statement:'Doctors at work'
},
{
  icon:'patient-icon.png',
  number:'20000',
  statement:'Happy Patients'
},
{
  icon:'hospital-icon.png',
  number:'2022',
  statement:'Established'
},
{
  icon:'bed-icon.png',
  number:'150',
  statement:'Medical Beds'
},
{
  icon:'bed-icon.png',
  number:'25',
  statement:'Insurance Tie Up '
}
]
ngOnInit(){
  this.startCounter();
}
}
