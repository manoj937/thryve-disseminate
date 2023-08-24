import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityComponent } from './community/community.component';
import { Route, RouterModule } from '@angular/router';
import { CommunityWidgetComponent } from './community-widget/community-widget.component';
import { CommunityPostsComponent } from './community-posts/community-posts.component';
import { CommunityCarouselComponent } from './community-carousel/community-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedUiModule } from '@thryve-disseminate/shared/ui';


const routes: Route[] = [
  {
    path: '',
    component: CommunityComponent,
  },
];
@NgModule({
  imports: [
    CommonModule, 
    SharedUiModule,
    CarouselModule,
    RouterModule.forChild(routes)],
  declarations: [
    CommunityComponent,
    CommunityWidgetComponent,
    CommunityPostsComponent,
    CommunityCarouselComponent,
  ],
  exports: [CommunityComponent, RouterModule],
})
export class CommunityFeatureModule {}
