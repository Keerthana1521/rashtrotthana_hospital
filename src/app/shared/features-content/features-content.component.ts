import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-features-content',
  templateUrl: './features-content.component.html',
  styleUrl: './features-content.component.css'
})
export class FeaturesContentComponent {
@Input() image_2: string='';
@Input() image_1: string =''; 
@Input() main_heading: string ='';
@Input() heading: string = '';
@Input() content:string ='';
}
