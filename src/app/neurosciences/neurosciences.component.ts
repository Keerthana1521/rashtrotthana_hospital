import { Component } from '@angular/core';

@Component({
  selector: 'app-neurosciences',
  templateUrl: './neurosciences.component.html',
  styleUrl: './neurosciences.component.css'
})
export class NeurosciencesComponent {
  specialities=[
    {
      main_heading:'Neurosciences',
      content:'Rashtrotthana Hospital s Neuroscience Department is dedicated to providing comprehensive assessment and management for a wide range of neurological conditions. Our team of highly skilled neurologists, backed by years of experience in diagnosis, treatment and care coordination, is committed to addressing even the most complex neurological disorders. Our Department of Neurology comprises a team of expert specialists who are passionate about delivering state-of-the-art care with a patient-centric, empathetic approach. From migraines to movement disorders, we offer advanced treatment options for various neurologic conditions.',
      heading:'Neurosciences',
      image:'Neurosciences.png',
      Doctors:[
        {
          doctor_image:'../../assets/doctor-38.png',
          doctor_name:'Dr. Jaidev S'
        },
      ]}];
}
