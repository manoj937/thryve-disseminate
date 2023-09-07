/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map } from 'rxjs';
import * as BlogsActions from './blogs.actions';
import { BlogsService } from '../api/blogs.service';

@Injectable()
export class BlogsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly blogs: BlogsService,
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
}
