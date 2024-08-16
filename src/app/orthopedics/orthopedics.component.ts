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
      content:'Centre of excellence for Orthopedic treatment - The team specializes in the diagnosis and treatment of disorders of the bones, joints, ligaments, tendons, muscles and nerves.State of the art treatment in all fields of orthopedic surgery including Accident & trauma care, spine surgeries and joint replacements.Areas of expertise : Arthroscopy, Sports Medicine, Arthroscopy (Keyhole) & Joint Replacements.Higher percentage of success in Knee & Hip replacement surgeries is our strength.',
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
