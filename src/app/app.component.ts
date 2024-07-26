import { Component , OnInit} from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AnalyticsService } from './analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private router: Router, private analyticsService: AnalyticsService) { } 
  title = 'rashtrotthana_hospital';
  ngOnInit() { 
    // this.router.events.subscribe((event) => { 
    //     if (!(event instanceof NavigationEnd)) { 
    //         return; 
    //     } 
    //     window.scrollTo(0, 0) 
    // }); 
    this.router.events.pipe(
      filter((event: Event) => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
    });
    // this.router.events.pipe(
    //   filter((event: Event) => event instanceof NavigationEnd)
    // ).subscribe((event: NavigationEnd) => {
    //   this.analyticsService.sendPageView(event.urlAfterRedirects);
    // });
  }
} 

