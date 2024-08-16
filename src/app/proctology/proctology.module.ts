import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProctologyComponent } from './proctology.component';

const routes: Routes = [
  { path: '', component: ProctologyComponent }
];

@NgModule({
  declarations: [
    ProctologyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProctologyModule { }
