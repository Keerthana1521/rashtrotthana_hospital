import { Component,OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrl: './donation.component.css'
})

export class DonationComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }
}
