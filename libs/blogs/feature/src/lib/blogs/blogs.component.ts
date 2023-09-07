import { Component } from '@angular/core';
import { BlogsFacade } from '@thryve-disseminate/blogs/data-access';

@Component({
  selector: 'thryve-disseminate-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent {
  constructor(public blogsDetails: BlogsFacade){}
}
