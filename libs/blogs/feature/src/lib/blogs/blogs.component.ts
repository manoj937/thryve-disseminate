import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogsFacade } from '@thryve-disseminate/blogs/data-access';

@Component({
  selector: 'thryve-disseminate-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent {

  moderatorId = sessionStorage.getItem('moderatorId');
  constructor(public blogsDetails: BlogsFacade, private router: Router){
    if(this.router.url.split('/').includes('myblogs')){
      this.blogsDetails.initLoadBlogsByModeratorId(String(this.moderatorId));
    } else{
      if(!sessionStorage.getItem('searchKey')) {
        this.blogsDetails.initLoadBlogs();
      }
    }
  }
}
