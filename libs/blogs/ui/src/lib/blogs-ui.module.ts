import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBlogUIComponent } from './add-blog/add-blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommunityPostsComponent } from './community-posts/community-posts.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [AddBlogUIComponent, BlogDetailComponent, CommunityPostsComponent],
  exports:[AddBlogUIComponent, BlogDetailComponent, CommunityPostsComponent]
})
export class BlogsUiModule {}
