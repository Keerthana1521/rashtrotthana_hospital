import { Component } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  posts: any[] = [];
  post: any;
  featuredPost: any; 
  categories: string[] = [];

  constructor(private blogService: BlogServiceService,private route: ActivatedRoute,) { }

  ngOnInit(): void {
    // this.blogService.getPosts().subscribe((data: any[]) => {
    //   this.posts = data;
    // });
    this.blogService.getPosts().subscribe((data: any[]) => {
      if (data.length > 0) {
        this.featuredPost = data[0];
        this.posts = data.slice(1);
      }
    });
    
  }
}
