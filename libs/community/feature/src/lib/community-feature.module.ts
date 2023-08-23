import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityComponent } from './community/community.component';
import { Route, RouterModule } from '@angular/router';
import { CommunityWidgetComponent } from './community-widget/community-widget.component';
import { CommunityPostsComponent } from './community-posts/community-posts.component';

const routes: Route[] = [
  {
    path: '',
    component: CommunityComponent,
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [
    CommunityComponent,
    CommunityWidgetComponent,
    CommunityPostsComponent,
  ],
  exports: [CommunityComponent, RouterModule],
})
export class CommunityFeatureModule {}
