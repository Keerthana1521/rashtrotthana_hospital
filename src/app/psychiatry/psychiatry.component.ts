import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'; 


@Component({
  selector: 'app-psychiatry',
  templateUrl: './psychiatry.component.html',
  styleUrl: './psychiatry.component.css'
})
export class PsychiatryComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    
  }
    ngOnInit(): void {
    this.titleService.setTitle("Psychiatric Hospital in Bangalore | Mental Disorders Treatment in Bangalore   ");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana is the best psychiatric hospital in Bangalore with a team of psychiatrists; therapists providing mental, behavioral disorders & psychiatry treatment.' });

  this.metaService.updateTag({ name: 'keywords', content: 'psychiatric hospital near me,mental problems, mental disorders, depression, schizophrenia, anxiety, substance use disorder, dementia, ADHD, autism, learning disorders, sleep disorders, behavioral issues, any illness of the mind.' });

  }
  specialities=[
    {
      main_heading:'Psychiatry',
      content:'Rashtrotthana Hospital s Psychiatry Department offers comprehensive care for patients suffering from a variety of mental health conditions. Our team of experienced psychiatrists is committed to achieving high success rates in treating mental disorders, positioning us as a leading choice for psychiatric care in Bangalore. We understand the importance of addressing mental health issues early, especially among children and adolescents. Research indicates that mental disorders impact one in five children and adolescents globally. At Rashtrotthana Hospital, we offer specialized programs for patients and their families, including group therapy and counseling, to support their journey to recovery.',
      heading:'Psychiatry',
      image:'Psychiatry.png',
      Doctors:[
        {
          doctor_image:'../../assets/doctor-27.png',
          doctor_name:'Dr. Valli Kiran'
        },
      ]}];
}
