import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd  } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { filter } from 'rxjs/operators';

import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrl: './facilities.component.css'
})
export class FacilitiesComponent implements OnInit{
  constructor(private router: Router,
    private breakpointObserver: BreakpointObserver, private route: ActivatedRoute,private titleService: Title, private metaService: Meta) {}
    isMobile:boolean=false;
    ngOnInit(): void {
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        this.checkIfChildRouteActive();
      });
      this.observeLaptopSizeChanges();
      this.titleService.setTitle("Medical Services - Rashtrotthana Hospital");  

  this.metaService.updateTag({ name: 'description', content: 'Facility | Our aim at Rashtrotthana hospital is to provide high quality, most advanced diagnostic and treatment facilities at affordable price.' });

  this.metaService.updateTag({ name: 'keywords', content: 'facilities, hospital facilities, emergency, emergency care, emergency & trauma, radiology, pharmacy, dialysis, physiotherapy' });
    }
    observeLaptopSizeChanges(): void {
      this.breakpointObserver.observe([Breakpoints.Large, Breakpoints.XLarge])
        .subscribe(result => {
          if (result.matches) {
            this.isMobile=false;
          } else {
            this.isMobile=true;
          }
        });
    }
    
  
    private childRouteActive = false;

  box =[
    {
      name: 'card',
      image: '../../assets/facility-1.png',
      title: 'In patient facility',
      button_text: 'Read More',
      route: 'inpatient'
    },
    {
      name: 'card',
      image: '../../assets/facility-2.png',
      title: 'Emergency & Trauma Care',
      button_text: 'Read More',
      route: 'emergency'
    },
    {
      name: 'card',
      image: '../../assets/facility-14.png',
      title: 'Insurance',
      button_text: 'Read More',
      route:'insurance'
    },
    {
      name: 'card',
      image: '../../assets/facility-8.png',
      title: 'Dialysis Unit',
      button_text: 'Read More',
      route:'dialysis'
    },
    {
      name: 'card',
      image: '../../assets/facility-11.png',
      title: 'Operation Theatre',
      button_text: 'Read More',
      route: 'operation-theatre'
    },
    {
      name: 'card',
      image: '../../assets/facility-12.png',
      title: 'I.C.U',
      button_text: 'Read More',
      route: 'icu'

    },
    {
      name: 'card',
      image: '../../assets/facility-7.png',
      title: 'Radiology Services',
      button_text: 'Read More',
      route:'raidology'
    },
    {
      name: 'card',
      image: '../../assets/facility-3.png',
      title: 'Pharmacy',
      button_text: 'Read More',
      route:'pharmacy'
    },
    {
      name: 'card',
      image: '../../assets/facility-4.png',
      title: 'Ambulance Services',
      button_text: 'Read More',
      route:'abulance'
    },
    {
      name: 'card',
      image: '../../assets/facility-13.png',
      title: 'Dietary',
      button_text: 'Read More',
      route:'dietery'
    },
    {
      name: 'card',
      image: '../../assets/facility-5.png',
      title: 'Physiotherapy',
      button_text: 'Read More',
      route:'physiotherapy'
    },
    {
      name: 'card',
      image: '../../assets/facility-6.png',
      title: 'Laboratory Services',
      button_text: 'Read More',
      route:'laboratory'
    },
    {
      name: 'card',
      image: '../../assets/facility-9.png',
      title: 'Endoscopy',
      button_text: 'Read More',
      route:'endoscopy'
    },
    {
      name: 'card',
      image: '../../assets/facility-10.png',
      title: 'Nutrition & Dietetics',
      button_text: 'Read More',
      route:'nutrition'
    },

    
  ]
  hoverBoxes = [
    { image: 'assets/facility-hover-1.png' },
    { image: 'assets/facility-hover-2.png' },
    { image: 'assets/facility-hover-14.png' },
    { image: 'assets/facility-hover-8.png' },
    { image: 'assets/facility-hover-11.png' },
    { image: 'assets/facility-hover-12.png' },
    { image: 'assets/facility-hover-7.png' },
    { image: 'assets/facility-hover-3.png' },
    { image: 'assets/facility-hover-4.png' },
    { image: 'assets/facility-hover-13.png' },
    { image: 'assets/facility-hover-5.png' },
    { image: 'assets/facility-hover-6.png' },
    { image: 'assets/facility-hover-9.png' },
    { image: 'assets/facility-hover-10.png' },
    
  ];
  activeHoverIndex: number | null = null;

  onMouseOver(index: number) {
    // console.log(this.isMobile)
    
    this.activeHoverIndex = index;
    
    
   
  }
  isChildRouteActive(): boolean {
    return this.childRouteActive;
  }

  private checkIfChildRouteActive() {
    this.childRouteActive = !!this.route.firstChild;
  }
  onMouseOut() {
    this.activeHoverIndex = null;
  }
  onButtonClick(route?: string) {
    if (route) {
      this.router.navigate([`/facility/${route}`]);
    } else {
      console.error('No route provided');
    }
  }
}
