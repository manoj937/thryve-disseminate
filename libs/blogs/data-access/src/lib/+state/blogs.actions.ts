import { createAction, props } from '@ngrx/store';
import { BlogsEntity } from './blogs.models';

export const initLoadBlogs = createAction('[Get All Blogs] Init');

export const loadBlogsSuccess = createAction(
  '[Blogs/API] Load Blogs Success',
  props<{ blogs: BlogsEntity[] }>()
);

export const loadBlogsFailure = createAction(
  '[Blogs/API] Load Blogs Failure',
  props<{ error: any }>()
);