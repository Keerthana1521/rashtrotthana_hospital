import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent {
  @Input() image: any; 
  @Input() name: any;
  @Input() desgination: any;
  @Input() about:any;
}
