import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostComponent } from './blog-post.component';

const routes: Routes = [
  { path: '', component: BlogPostComponent }
];

@NgModule({
  declarations: [BlogPostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BlogPostModule { }
