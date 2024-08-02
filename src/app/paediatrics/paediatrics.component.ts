import { Component } from '@angular/core';

@Component({
  selector: 'app-paediatrics',
  templateUrl: './paediatrics.component.html',
  styleUrl: './paediatrics.component.css'
})
export class PaediatricsComponent {
  specialities=[
    {
      main_heading:'Paediatrics & Neonatology',
      content:'The Pediatrics Department at JMRH is an example for dedication & devotional care towards children. Round the clock availability of an experienced Pediatrician is what sets us apart when it comes to caring for children. 6 bedded Pediatric ICU (PICU) & strong support system provides an added advantage. Availability of a Neonatologist & Neonatal ICU (NICU) ensures medical care of high quality for newborns & successful management of high risk babies.',
      heading:'Paediatrics & Neonatology',
      image:'Paediatrics & Neonatology.jfif',
      Doctors:[
        {
          doctor_image:'../../assets/doctor-11.png',
          doctor_name:'Dr. Savinay S Kanchibail'
        }
      ]}];
}
