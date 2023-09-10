import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityComponent } from './community/community.component';
import { Route, RouterModule } from '@angular/router';
import { SharedUiModule } from '@thryve-disseminate/shared/ui';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommunityUiModule } from '@thryve-disseminate/community/ui';
import { CommunityFacade } from '@thryve-disseminate/community/data-access';
import { BlogsFacade } from '@thryve-disseminate/blogs/data-access';
import { QaUiModule } from '@thryve-disseminate/qa/ui';
import { BlogsFeatureModule } from '@thryve-disseminate/blogs/feature';
import { BlogDetailComponent, BlogsComponent, AddBlogComponent } from '@thryve-disseminate/blogs/feature';
import { AskCommunityComponent, CommunityQuestionsComponent } from '@thryve-disseminate/qa/feature';

const routes: Route[] = [
  {
    path: '',
    component: CommunityComponent,
    children: [{
        path: '', 
        redirectTo: 'blogs', 
        pathMatch: 'full'
      },
      {
        path: 'add-blog',
        component: AddBlogComponent,
      },
      {
        path: 'blogs',
        component: BlogsComponent
      },
      {
        path: 'blogs/:id',
        component: BlogDetailComponent
      },
      {
        path: 'myblogs/:id',
        component: BlogsComponent
      },
      {
        path: 'qa',
        component: CommunityQuestionsComponent,
      },
      {
        path: 'ask-community',
        component: AskCommunityComponent,
      },
    ],
  },
];
@NgModule({
  imports: [
    CommonModule,
    SharedUiModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularEditorModule,
    CommunityUiModule,
    QaUiModule,
    BlogsFeatureModule,
    RouterModule.forChild(routes),
  ],

  declarations: [CommunityComponent],
  providers: [CommunityFacade, BlogsFacade],
  exports: [CommunityComponent, RouterModule],
})
export class CommunityFeatureModule {}
