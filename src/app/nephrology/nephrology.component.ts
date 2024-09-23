import { Component,OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'; 

@Component({
  selector: 'app-nephrology',
  templateUrl: './nephrology.component.html',
  styleUrl: './nephrology.component.css'
})
export class NephrologyComponent {
  constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit(): void {
    this.titleService.setTitle("Best Kidney/Nephrology Hospital in Bangalore, India | Rashtrotthana Hospitals");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital is the best kidney Hospital in Bangalore, India with highly experienced kidney specialists/nephrologists performing surgeries and treatments' });

  this.metaService.updateTag({ name: 'keywords', content: 'nephrology,kidney hospital near me,kidney, kidney pain causes, kidney stones, kidney stone symptoms' });
  }
  specialities=[
    {
      main_heading:'Nephrology',
      content:'Department of Nephrology is a well established treatment center for all kidney related ailments. Availability of a certified renal transplant physician has given rise to standard & safe treatment protocols. Quality Dialysis at affordable cost - 8 Bedded dialysis unit is set up in a clean & hygienic environment catering to dialysis patients across all days of the week. Discounted blood investigation packages (Renal Profile) available for focused approach. Nephrology concerns the diagnosis and treatment of kidneydiseases, including electrolyte disturbances and hypertension, and the care of those requiring renal replacement therapy, including dialysis and renal transplant patients.',
      heading:'Nephrology',
      image:'Nephrology.png',
      Doctors:[
        {
          doctor_image:'../../assets/doctor-16.png',
          doctor_name:'Dr. Santhosh S',
          experience : "14"
        }
      ]}];
}
