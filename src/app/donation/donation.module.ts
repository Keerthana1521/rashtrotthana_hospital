import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DonationComponent } from './donation.component';

const routes: Routes = [
  { path: '', component: DonationComponent }
];

@NgModule({
  declarations: [DonationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DonationModule { }
