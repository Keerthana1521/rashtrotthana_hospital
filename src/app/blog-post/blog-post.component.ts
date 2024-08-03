import { Component } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {
  post: any;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogServiceService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = +idParam;
      this.blogService.getPost(id).subscribe((data: any) => {
        this.post = data;
      });
    } else {
      console.error('No ID provided in route.');
    }
  }
  }

