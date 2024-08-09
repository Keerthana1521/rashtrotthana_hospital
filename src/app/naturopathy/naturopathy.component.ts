import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'; 

@Component({
  selector: 'app-naturopathy',
  templateUrl: './naturopathy.component.html',
  styleUrl: './naturopathy.component.css'
})
export class NaturopathyComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    
  }
  ngOnInit(): void {
    this.titleService.setTitle("Comprehensive Lifestyle Medicine - Rashtrotthana Hospital Bangalore");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital offers expert lifestyle medicine services in Bangalore, focusing on preventive care through healthy lifestyle changes.' });

  this.metaService.updateTag({ name: 'keywords', content: 'lifestyle medicine, preventive care, holistic health, lifestyle changes Bangalore' });

  }
  doctors =[
    {
      image : '../../assets/doctor-14.png',
      name : "Dr. Suvarnini Konale",
      section : "BNYS",
      designation : "LIFESTYLE MEDICINE",
    },
    {
      image : '../../assets/doctor-43.png',
      name : "Dr. Varsha P ",
      section : "BNYS",
      designation : "LIFESTYLE MEDICINE",
    },
    {
      image : '../../assets/dummy.png',
      name : "Dr. Shamantha",
      section : "BAMS",
      designation : "LIFESTYLE MEDICINE",
      Department : "Agnivesha Institute Of Ayurveda"
    }
  ]
}
