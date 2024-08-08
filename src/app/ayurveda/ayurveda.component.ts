import { Component,OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'; 

@Component({
  selector: 'app-ayurveda',
  templateUrl: './ayurveda.component.html',
  styleUrl: './ayurveda.component.css'
})
export class AyurvedaComponent {
  constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit(): void {
    this.titleService.setTitle("About Rashtrotthana Hospital, R R Nagar Bangalore India");  

  this.metaService.updateTag({ name: 'description', content: ' Rashtrotthana Hospital affiliated with Rashtrotthana Trust, we dedicate ourselves to providing exceptional healthcare services. Within our 162-bed facility, we prioritize holistic care, offering specialized treatments in Modern Medicine, Ayurveda, Homeopathy, Yoga & Naturopathy.' });

  this.metaService.updateTag({ name: 'keywords', content: 'rashtrotthana hospital, modern medicine, ayurveda, homeopathy, yoga, naturopathy, affordable healthcarae' });
  }

}
