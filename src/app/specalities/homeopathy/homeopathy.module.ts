import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeopathyComponent } from './homeopathy.component';

const routes: Routes = [
  { path: '', component: HomeopathyComponent }
];

@NgModule({
  declarations: [
    HomeopathyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    HomeopathyComponent
  ]
})
export class HomeopathyModule { }
