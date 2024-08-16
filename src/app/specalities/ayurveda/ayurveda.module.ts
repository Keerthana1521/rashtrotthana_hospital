import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AyurvedaComponent } from './ayurveda.component';

const routes: Routes = [
  { path: '', component: AyurvedaComponent }
];

@NgModule({
  declarations: [
    AyurvedaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    AyurvedaComponent
  ]
})
export class AyurvedaModule { }
