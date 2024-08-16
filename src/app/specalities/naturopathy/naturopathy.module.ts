import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NaturopathyComponent } from './naturopathy.component';

const routes: Routes = [
  { path: '', component: NaturopathyComponent }
];

@NgModule({
  declarations: [
    NaturopathyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    NaturopathyComponent
  ]
})
export class NaturopathyModule { }
