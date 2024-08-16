import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HerniaComponent } from './hernia.component';

const routes: Routes = [
  { path: '', component: HerniaComponent }
];

@NgModule({
  declarations: [
    HerniaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HerniaModule { }
