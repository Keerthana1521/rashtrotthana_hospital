import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import * as AOS from 'aos';
@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrl: './donation.component.css'
})

export class DonationComponent implements OnInit {
  constructor(private router: Router,
    private viewportScroller: ViewportScroller) { }
  ngOnInit() {
    AOS.init();
  }
  scrollToSection() {
    this.viewportScroller.scrollToAnchor('container_2');
  }
}
