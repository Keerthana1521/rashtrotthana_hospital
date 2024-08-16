import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form.component';

const routes: Routes = [
  { path: '', component: ContactFormComponent }
];

@NgModule({
  declarations: [ContactFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactFormModule { }
