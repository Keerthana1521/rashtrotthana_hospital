import { Component , OnInit} from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AnalyticsService } from './analytics.service';

declare let gtag: Function;
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
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      gtag('config', 'AW-16656770043', {
        'page_path': event.urlAfterRedirects
      });
    });
  }
} 

