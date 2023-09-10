/* eslint-disable @typescript-eslint/no-explicit-any */
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

export const initLoadBlogsById = createAction(
  '[Get All Blogs By ID] Init',
props<{ id: string }>());

export const loadBlogsByIdSuccess = createAction(
  '[Blogs/API] Load Blogs By ID Success',
  props<{ blogs: BlogsEntity[] }>()
);

export const loadBlogsByIdFailure = createAction(
  '[Blogs/API] Load Blogs By ID Failure',
  props<{ error: any }>()
);

export const initLoadBlogsByModeratorId = createAction(
  '[Get All Blogs By Moderator ID] Init',
  props<{ id: string }>()
);

export const loadBlogsByModeratorIdSuccess = createAction(
  '[Blogs/API] Load Blogs By Moderator ID Success',
  props<{ blogs: BlogsEntity[] }>()
);

export const loadBlogsByModeratorIdFailure = createAction(
  '[Blogs/API] Load Blogs By Moderator ID Failure',
  props<{ error: any }>()
);

export const initLoadSearchBlogs = createAction('[Get All Blogs By Search Keyword] Init',
props<{ keyword: string }>());

export const loadSearchBlogsSuccess = createAction(
  '[Blogs/API] Load Search Blogs Success',
  props<{ blogs: BlogsEntity[] }>()
);

export const loadSearchBlogsFailure = createAction(
  '[Blogs/API] Load Search Blogs Failure',
  props<{ error: any }>()
);