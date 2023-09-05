import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityComponent } from './community/community.component';
import { Route, RouterModule } from '@angular/router';
import { CommunityWidgetComponent } from './community-widget/community-widget.component';
import { CommunityPostsComponent } from './community-posts/community-posts.component';
import { CommunityCarouselComponent } from './community-carousel/community-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedUiModule } from '@thryve-disseminate/shared/ui';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { WsiwygEditorComponent } from './wsiwyg-editor/wsiwyg-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddBlogComponent } from './add-blog/add-blog.component';
// import { CommunityService } from './community.service';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { CommunityService } from './community.service';
import { CommunityUiModule } from '@thryve-disseminate/community/ui';

const routes: Route[] = [
  {
    path: '',
    component: CommunityComponent,
  },
  {
    path: 'blog-detail',
    component: BlogDetailComponent,
  }
];
@NgModule({
  imports: [
    CommonModule,
    SharedUiModule,
    CarouselModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularEditorModule,
    CommunityUiModule,
    RouterModule.forChild(routes),
  ],

  declarations: [
    CommunityComponent,
    CommunityWidgetComponent,
    CommunityPostsComponent,
    CommunityCarouselComponent,
    WsiwygEditorComponent,
    AddBlogComponent,
    BlogDetailComponent,
  ],
  providers: [CommunityService],
  exports: [CommunityComponent, RouterModule],
})
export class CommunityFeatureModule {}
