import { Component } from '@angular/core';

@Component({
  selector: 'app-nephrology',
  templateUrl: './nephrology.component.html',
  styleUrl: './nephrology.component.css'
})
export class NephrologyComponent {
  specialities=[
    {
      main_heading:'Nephrology',
      content:'Department of Nephrology at JMRH is a well established treatment center for all kidney related ailments. Availability of a certified renal transplant physician has given rise to standard & safe treatment protocols. Quality Dialysis at Affordable cost - 8 Bedded dialysis unit is set up in a clean & hygienic environment catering to dialysis patients across all days of the week. Discounted blood investigation packages (Renal Profile) available for focused approach. Nephrology concerns the diagnosis and treatment of kidneydiseases,including electrolyte  disturbances and hypertension, and the care of those requiring renalreplacementtherapy,including dialysis and renal transplant patients.',
      heading:'Nephrology',
      image:'Nephrology.png',
      Doctors:[
        {
          doctor_image:'../../assets/doctor-16.png',
          doctor_name:'Dr. Santhosh S'
        }
      ]}];
}
