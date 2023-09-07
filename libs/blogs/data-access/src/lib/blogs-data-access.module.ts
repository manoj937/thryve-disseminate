/* eslint-disable @typescript-eslint/no-explicit-any */
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromBlogs from './+state/blogs.reducer';
import { BlogsEffects } from './+state/blogs.effects';
import { BlogsFacade } from './+state/blogs.facade';
import { AddBlogService } from './api/add-blog.service';
import { BlogsService } from './api/blogs.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromBlogs.BLOGS_FEATURE_KEY, fromBlogs.blogsReducer),
    EffectsModule.forFeature([BlogsEffects]),
  ],
  providers: [BlogsFacade],
})
export class BlogsDataAccessModule {
  public static forRoot(
    environment: any
  ): ModuleWithProviders<BlogsDataAccessModule> {
    return {
      ngModule: BlogsDataAccessModule,
      providers: [
        AddBlogService,
        BlogsService,
        {
          provide: 'env',
          useValue: environment,
        },
      ],
    };
  }
}
