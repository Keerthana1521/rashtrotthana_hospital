import { Component } from '@angular/core';

@Component({
  selector: 'app-icu',
  templateUrl: './icu.component.html',
  styleUrl: './icu.component.css'
})
export class IcuComponent {
  facilites=[
    {
      main_heading:'I.C.U',
      heading:'I.C.U',
      content:'20+ Bedded ICU unit - Well Equipped to handle all types of medical emergencies. Medical ICU, Surgical ICU, Pediatric ICU, Neonatal ICU & Cardiac ICU available for focused critical care round the clock. Qualified & Experienced Intensvist provided cover at all times.',
      image_1:'ICU.png',
      image_2:'emergency-facility.png'
    }
  ];
}
