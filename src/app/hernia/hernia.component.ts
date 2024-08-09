import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'; 

@Component({
  selector: 'app-hernia',
  templateUrl: './hernia.component.html',
  styleUrl: './hernia.component.css'
})
export class HerniaComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    
  }
  ngOnInit(): void {
    this.titleService.setTitle("Effective Hernia Treatment & Surgery - Rashtrotthana Hospital");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital offers effective hernia treatment and surgery options in Bangalore with advanced surgical care.' });

  this.metaService.updateTag({ name: 'keywords', content: 'hernia surgery, hernia treatment, best hospital for hernia Bangalore' });

  }

}
