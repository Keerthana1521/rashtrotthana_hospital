import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HealthCheckupComponent } from './health-checkup.component';

const routes: Routes = [
  { path: '', component: HealthCheckupComponent }
];

@NgModule({
  declarations: [HealthCheckupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HealthCheckupModule { }
