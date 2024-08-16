import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DoctorLayoutComponent } from './doctor-layout.component';

const routes: Routes = [
  { path: '', component: DoctorLayoutComponent }
];

@NgModule({
  declarations: [DoctorLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DoctorLayoutModule { }
