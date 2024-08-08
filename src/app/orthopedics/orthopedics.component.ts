import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'; 


@Component({
  selector: 'app-orthopedics',
  templateUrl: './orthopedics.component.html',
  styleUrl: './orthopedics.component.css'
})
export class OrthopedicsComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    
  }
  ngOnInit(): void {
    this.titleService.setTitle("Best orthopaedics Hospital in Bangalore, India - Rashtrotthana Hospital");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital is the best orthopaedics hospital in Bangalore, India with highly experienced orthopaedics/ortho doctor providing orthopaedic treatment & surgeries.' });

  this.metaService.updateTag({ name: 'keywords', content: 'orthopaedics hospital near me, orthopaedics, knee, knee pain, shoulder pain, bone fractures, joint pains, ortho, knee pain causes' });

  }
  specialities=[
    {
      main_heading:'Orthopedics',
      content:'General Medicine dept at JMRH also provides advanced medical treatment for Infectious diseases, metabolic disorders, lifestyle diseases & co-management of respiratory, gastro, cardiac, nephrology & neuro cases. For handling critical medical cases - dedicated 6 bedded Medical ICU is available & a High dependency unit (HDU) is also available for patients requiring continuous monitoring. General Medicine, also referred to as Internal Medicine, is a branch of medicine that deals with the prevention, diagnosis and the non-surgical treatments of diseases that are related to the internal organs.',
      heading:'Orthopedics',
      image:'Orthopedics.png',
      Doctors:[
        {
          doctor_image:'../../assets/doctor-6.png',
          doctor_name:'Dr. Ravishankar. D'
        },
        {
          doctor_image:'../../assets/doctor-26.png',
          doctor_name:'Dr. Pramod Cinder'
        }
      ]}];
}
