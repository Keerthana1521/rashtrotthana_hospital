import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'; 


@Component({
  selector: 'app-urology',
  templateUrl: './urology.component.html',
  styleUrl: './urology.component.css'
})
export class UrologyComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    
  }
  ngOnInit(): void {
    this.titleService.setTitle("Best Urology Hospital in Bangalore | Kidney Specialist Hospital Bangalore");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital is the best urology hospital in Bangalore, India with experienced top urologists providing urology treatment.' });

  this.metaService.updateTag({ name: 'keywords', content: 'best urology hospital near me,urology, urinary problems, UTI, kidney stones, urinary incontinence, urine' });

  }
  specialities=[
    {
      main_heading:'Urology',
      content:'Urology is the surgical specialty that focuses on the male & female urinary tract and on the reproductive system of males. The Urology Department at Rashtrotthana Hospital is an extensive surgical department equipped to handle all types of urological issues right from basic urological diagnosis to complex procedures including laparoscopic & laser surgeries. The specialist expertise in treatment of prostate(TURP), kidney stones, cancers related to kidney & bladder, Hydrocoele, urethroplasty & etc.',
      heading:'Urology',
      image:'Urology.png',
      Doctors:[
        {
          doctor_image:'Dr.Madhu S N .png',
          doctor_name:'Dr. Madhu S.N'
        },
        {
          doctor_image:'Dr. Nagaraj Rao.png',
          doctor_name:'Dr. Nagaraj Rao'
        }
      ]}];
}
