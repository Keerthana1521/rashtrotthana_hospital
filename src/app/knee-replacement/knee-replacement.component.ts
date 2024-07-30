import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';  
import { Router } from '@angular/router';

@Component({
  selector: 'app-knee-replacement',
  templateUrl: './knee-replacement.component.html',
  styleUrl: './knee-replacement.component.css'
})
export class KneeReplacementComponent implements OnInit {
  constructor(  
    private titleService: Title,  
    private metaService: Meta,
    private router: Router
  ) { } 
  ngOnInit() {  
    this.titleService.setTitle("Total Knee Replacement");  
    
  // Set the meta description
  this.metaService.updateTag({ name: 'description', content: 'Total Knee Replacement' });

  // Optionally set other meta tags
  this.metaService.updateTag({ name: 'keywords', content: 'knee, knee pain, knee replacement' }); 
        
  }  
  contactus(){
    this.router.navigate(['/contact']);
  }
}
