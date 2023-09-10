/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map } from 'rxjs';
import * as BlogsActions from './blogs.actions';
import { BlogsService } from '../api/blogs.service';
import { FindBlogByBlogidService } from '../api/find-blog-by-blogid.service';
import { FindBlogByModeratoridService } from '../api/find-blog-by-moderatorid.service';
import { SearchBlogService } from '../api/search-blog.service';

@Injectable()
export class BlogsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly blogs: BlogsService,
    private readonly blogsById: FindBlogByBlogidService,
    private readonly blogsByModeratorId: FindBlogByModeratoridService,
    private readonly searchBlogs: SearchBlogService
  ) {}

  initLoadBlogs$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BlogsActions.initLoadBlogs),
      switchMap(() =>
        this.blogs.getBlogsList().pipe(
          map((result: any) => BlogsActions.loadBlogsSuccess({ blogs: result})),
          catchError((error) => of(BlogsActions.loadBlogsFailure(error)))
        )
      )
    )}
  )

  initLoadBlogsById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BlogsActions.initLoadBlogsById),
      switchMap((actions) =>
        this.blogsById.getBlogsListById(actions.id).pipe(
          map((result: any) => BlogsActions.loadBlogsByIdSuccess({ blogs: result})),
          catchError((error) => of(BlogsActions.loadBlogsByIdFailure(error)))
        )
      )
    )}
  )

  initLoadBlogsByModeratorId$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BlogsActions.initLoadBlogsByModeratorId),
      switchMap((actions) =>
        this.blogsByModeratorId.getBlogsByModeratorId(actions.id).pipe(
          map((result: any) => BlogsActions.loadBlogsByModeratorIdSuccess({ blogs: result})),
          catchError((error) => of(BlogsActions.loadBlogsByModeratorIdFailure(error)))
        )
      )
    )}
  )

  initLoadSearchBlogs$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BlogsActions.initLoadSearchBlogs),
      switchMap((actions) =>
        this.searchBlogs.getBlogsListByKeyword(actions.keyword).pipe(
          map((result: any) => BlogsActions.loadBlogsSuccess({ blogs: result})),
          catchError((error) => of(BlogsActions.loadBlogsFailure(error)))
        )
      )
    )}
  )
}
