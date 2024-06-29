import { Component } from '@angular/core';

@Component({
  selector: 'app-pulmonology',
  templateUrl: './pulmonology.component.html',
  styleUrl: './pulmonology.component.css'
})
export class PulmonologyComponent {
  specialities=[
    {
      main_heading:'Pulmonology',
      content:'The pulmonology department at JMRH is overseen by an experienced team of pulmonologists. The respiratory system, which includes the sinuses, mouth, nose, throat, voice box, diaphragm, lungs, and windpipe, is the primary focus of these specialists. High-tech thoracic disorder treatment and evaluation tools such as blood tests, X-rays, CT scans, spirometry, and bronchoscopy are all available at the state-of-the-art pulmonology department. Pulmonary hygiene, biopsy, and Airway Ablation procedures are all handled by a team of highly-trained clinicians. The whole pulmonology department at JMRH is committed to delivering the best possible clinical assessments, diagnosis, and medications.',
      heading:'Pulmonology',
      image:'Pulmonology.png',
      Doctors:[
        {
          doctor_image:'Dr. KRISHNASWAMY LAKSHMAN.png',
          doctor_name:'Dr. KRISHNASWAMY LAKSHMAN'
        },
        {
          doctor_image:'Dr. Kolla Vinod.png',
          doctor_name:'Dr. Kolla Vinod'
        }
      ]}];
}
