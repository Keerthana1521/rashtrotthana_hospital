import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'; 


@Component({
  selector: 'app-pulmonology',
  templateUrl: './pulmonology.component.html',
  styleUrl: './pulmonology.component.css'
})
export class PulmonologyComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    
  }
  ngOnInit(): void {
    this.titleService.setTitle("Best Pulmonology Hospital in bangalore India ");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital is the best pulmonology hospital in India with experienced pulmonologists providing lungs care and respiratory related problems.' });

  this.metaService.updateTag({ name: 'keywords', content: 'pulmonology hospital near me,pulmonology, pulmonologist, breathing problems, breathing difficulty, respiratory problems, bronchial asthma, bronchial atresia, bronchiectasis, bronchiolitis, lungs, breathe' });

  }
  specialities=[
    {
      main_heading:'Pulmonology',
      content:'The pulmonology department is overseen by an experienced team of pulmonologists. The respiratory system, which includes the sinuses, mouth, nose, throat, voice box, diaphragm, lungs, and windpipe are the focus of these specialists. High-tech thoracic disorder treatment and evaluation tools such as blood tests, X-rays, CT scans, spirometry, and bronchoscopy are all available at the state-of-the-art pulmonology department. Pulmonary hygiene, biopsy, and Airway Ablation procedures are all handled by a team of highly-trained clinicians. The whole pulmonology department is committed to delivering the best possible clinical assessments, diagnosis, and medications.',
      heading:'Pulmonology',
      image:'Pulmonology.png',
      Doctors:[
        {
          doctor_image:'../../assets/doctor-32.png',
          doctor_name:'Dr. Kolla Vinod'
        }
      ]}];
}
