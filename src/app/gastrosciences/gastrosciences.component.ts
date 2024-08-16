import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'; 


@Component({
  selector: 'app-gastrosciences',
  templateUrl: './gastrosciences.component.html',
  styleUrl: './gastrosciences.component.css'
})
export class GastrosciencesComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    
  }
  ngOnInit(): void {
    this.titleService.setTitle("Best Gastroenterology Hospital in bangalore India | Best liver Hospital in India");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital is the best Gastro hospital in India with experienced gastroenterologists providing digestive and stomach related problems.' });

  this.metaService.updateTag({ name: 'keywords', content: 'Gastroenterology stomach,gastroenterology hospital near me, stomach pain, digestion, digestive care, digestive system, gut, gut health, gut care' });

  }
  specialities=[
    {
      main_heading:'Gastrosciences',
      content:'Comprehensive Medical & Surgical Gastroenterology services under one roof. Competent, talented & experienced professionals manage any kind of gastro-intestinal & liver disorders and its complications. High precision instruments along with video navigation tools for minimally invasive diagnosis & treatment are available. Diagnostic & Surgical treatments available under the department of Gastro Sciences: Endoscopy, Colonoscopy, Sigmoidoscopy, Video Proctoscopy. Laparoscopic cholecystectomy, Proctology, Breast Laparoscopy & all types of hernia treatment.',
      heading:'Gastrosciences',
      image:'Gastrosciences.png',
      Doctors:[
        {
          doctor_image:'../../assets/doctor-28.png',
          doctor_name:'Dr. Ajay N'
        }
      ]}];
}
