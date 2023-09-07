import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogsUiModule } from '@thryve-disseminate/blogs/ui';
import { BlogsFacade } from '@thryve-disseminate/blogs/data-access';

@NgModule({
  imports: [CommonModule, BlogsUiModule],
  declarations: [AddBlogComponent, BlogsComponent, BlogDetailComponent],
  providers:[BlogsFacade],
  exports:[AddBlogComponent, BlogsComponent, BlogDetailComponent]
})
export class BlogsFeatureModule {}
