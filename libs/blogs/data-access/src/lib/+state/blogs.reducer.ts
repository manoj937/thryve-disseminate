import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as BlogsActions from './blogs.actions';
import { BlogsEntity } from './blogs.models';

export const BLOGS_FEATURE_KEY = 'blogs';

export interface BlogsState extends EntityState<BlogsEntity> {
  selectedBlogId: string | null;  // which Blogs record has been selected
  loaded: boolean; // has the Blogs list been loaded
  error?: string | null; // last known error (if any)
}

export interface BlogsPartialState {
  readonly [BLOGS_FEATURE_KEY]: BlogsState;
}

export function selectedBlogId(blog: BlogsEntity) {
  return blog.blogId;
}

export const blogsAdapter: EntityAdapter<BlogsEntity> =
  createEntityAdapter<BlogsEntity>({
    selectId: selectedBlogId,
  });

export const initialBlogsState: BlogsState = blogsAdapter.getInitialState({
  selectedBlogId: null,
  loaded: false,
});

const reducer = createReducer(
  initialBlogsState,
  on(BlogsActions.initLoadBlogs, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(BlogsActions.loadBlogsSuccess, (state, action) =>
    blogsAdapter.setAll(action.blogs, { ...state, loaded: true })
  ),
  on(BlogsActions.loadBlogsFailure, (state, { error }) => ({ ...state, error }))
);

export function blogsReducer(state: BlogsState | undefined, action: Action) {
  return reducer(state, action);
}
