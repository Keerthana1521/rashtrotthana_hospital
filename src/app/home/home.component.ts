import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {  

  showContent: any = 'default';

  features = [
    {
      name: 'Yoga',
      icon: 'yoga.png',
      className: 'yoga',
      key: 'yoga',
    },
    {
      name: 'Naturopathy',
      icon: 'naturopathy.png',
      className: 'naturopathy',
      key: 'naturopathy',
    },
    {
      name: 'Modern Medicine',
      icon: 'modern medicine.png',
      className: 'modern-medicine',
      key: 'modern-medicine',
    },
    {
      name: 'Ayurveda',
      icon: 'ayurveda.png',
      className: 'ayurveda',
      key: 'ayurveda',
    },
    {
      name: 'Homeopathy',
      icon: 'homeopathy.png',
      className: 'homeopathy',
      key: 'homeopathy',
    }
  ];

  onMouseOver(key: string) {
    this.showContent = key;
  };

  onMouseOut(){
    this.showContent = 'default';
  }

  content: any = {
    'default': 'India"s First Integrated Multispecialty Hospital Blending Modern And Traditional Medicine For Holistic Healing',
    'yoga': 'Yoga is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India. Yoga is one of the six Āstika schools of Indian philosophical traditions.',
    'naturopathy': 'Naturopathy or naturopathic medicine is a form of alternative medicine that employs an array of pseudoscientific practices branded as "natural", "non-invasive", or promoting "self-healing".',
    'modern-medicine': 'Modern medicine, or medicine as we know it, started to emerge after the Industrial Revolution in the 18th century. At this time, there was rapid growth in economic activity in Western Europe and the Americas.',
    'ayurveda': 'Ayurveda is a system of medicine with historical roots in the Indian subcontinent. Globalized and modernized practices derived from Ayurveda traditions are a type of alternative medicine.',
    'homeopathy': 'Homeopathy or homœopathy is a pseudoscientific system of alternative medicine. It was created in 1796 by Samuel Hahnemann. Its practitioners, called homeopaths, believe that a substance that causes symptoms of a disease in healthy people would cure similar symptoms in sick people.'
  };

}
