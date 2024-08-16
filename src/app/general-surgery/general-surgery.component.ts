import { Component } from '@angular/core';

@Component({
  selector: 'app-general-surgery',
  templateUrl: './general-surgery.component.html',
  styleUrl: './general-surgery.component.css'
})
export class GeneralSurgeryComponent {
  specialities=[
    {
      main_heading:'General Surgery',
      content:'The General Surgery department is a tertiary level surgery center capable of handling complex & major surgeries. Experienced surgeons, Modular OT’s, availability of Surgical ICU & trained nursing staff for good post surgical care make rashtrotthana hospital the center of choice for surgeries. General surgery is a surgical specialty that focuses on alimentary canal and abdominal contents including the esophagus, stomach, small intestine, large intestine, liver, pancreas, gallbladder, appendix and bile ducts, and often the thyroid gland.',
      heading:'General Surgery',
      image:'general_surgery.jfif',
      Doctors:[
       
        {
          doctor_image:'Dr. Atmaram D C.png',
          doctor_name:'Dr. Atmaram D C'
        }
      ]}];
}
