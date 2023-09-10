import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBlogUIComponent } from './add-blog/add-blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommunityPostsComponent } from './community-posts/community-posts.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  declarations: [AddBlogUIComponent, BlogDetailComponent, CommunityPostsComponent],
  exports:[AddBlogUIComponent, BlogDetailComponent, CommunityPostsComponent]
})
export class BlogsUiModule {}
