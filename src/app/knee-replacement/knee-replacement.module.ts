import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { KneeReplacementComponent } from './knee-replacement.component';

const routes: Routes = [
  { path: '', component: KneeReplacementComponent }
];

@NgModule({
  declarations: [
    KneeReplacementComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class KneeReplacementModule { }
