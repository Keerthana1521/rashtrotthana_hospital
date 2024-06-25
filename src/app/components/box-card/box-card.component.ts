import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-box-card',
  templateUrl: '../../components/box-card/box-card.component.html',
  styleUrl: './box-card.component.css'
})
export class BoxCardComponent {
  showImage:any;
@Input() image: string ='1'; 
@Input() title: string ='';
@Input() button_text: string = '';
@Input() key:string ='';

onMouseOver(key: string) {

  this.showImage =  key;
};

hover_image:any ={
  'default': 'assets/sheild_num.png',
  'In patient facility': 'assets/hover-facility-1.png',
  'Emergency & Trauma Care': 'assets/naturopathy-outline.png',
  'Pharmacy': 'assets/medicine-outline.png',
  'Ambulance Services': 'assets/ayurveda-outline.png',
  'Physiotherapy': 'assets/homeopathy-outline.png'
}
}
