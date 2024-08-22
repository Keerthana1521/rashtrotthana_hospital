import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'; 


@Component({
  selector: 'app-paediatrics',
  templateUrl: './paediatrics.component.html',
  styleUrl: './paediatrics.component.css'
})
export class PaediatricsComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    
  }
  ngOnInit(): void {
    this.titleService.setTitle("Best Child Hospital in Bangalore | Paediatric Hospital in Bangalore");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital is the best paediatric hospital or child speciality hospital in Bangalore with skilled paediatricians.' });

  this.metaService.updateTag({ name: 'keywords', content: 'best child hospital near me,paediatrician, children, kids, child\'s health, paediatrics, neonatology, baby, newborn' });

  }
  specialities=[
    {
      main_heading:'Paediatrics & Neonatology',
      content:'The Pediatrics Department at Rashtrotthana Hospital is an example for dedication & devotional care towards children. Round the clock availability of an experienced Pediatrician is what sets us apart when it comes to caring for children. 6 bedded Pediatric ICU (PICU) & strong support system provides an added advantage. Availability of a Neonatologist & Neonatal ICU (NICU) ensures medical care of high quality for newborns & successful management of high risk babies.',
      heading:'Paediatrics & Neonatology',
      image:'Paediatrics & Neonatology.jfif',
      Doctors:[
        {
          doctor_image:'../../assets/doctor-11.png',
          doctor_name:'Dr. Savinay S. Kanchibail'
        },
        {
          doctor_image:'../../assets/doctor-29.png',
          doctor_name:'Dr. Vishwanath Sanagoudar'
        },
        {
          doctor_image:'../../assets/doctor-30.png',
          doctor_name:'Dr. Niveditha C'
        }    
      ]}];
}
