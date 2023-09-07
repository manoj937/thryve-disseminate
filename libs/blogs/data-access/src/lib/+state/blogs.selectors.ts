import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BLOGS_FEATURE_KEY, BlogsState, blogsAdapter } from './blogs.reducer';

// Lookup the 'Blogs' feature state managed by NgRx
export const selectBlogsState =
  createFeatureSelector<BlogsState>(BLOGS_FEATURE_KEY);

const { selectAll, selectEntities } = blogsAdapter.getSelectors();

export const selectBlogsLoaded = createSelector(
  selectBlogsState,
  (state: BlogsState) => state.loaded
);

export const selectBlogsError = createSelector(
  selectBlogsState,
  (state: BlogsState) => state.error
);

export const selectAllBlogs = createSelector(
  selectBlogsState,
  (state: BlogsState) => selectAll(state)
);

export const selectBlogsEntities = createSelector(
  selectBlogsState,
  (state: BlogsState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectBlogsState,
  (state: BlogsState) => state.selectedBlogId
);

export const selectEntity = createSelector(
  selectBlogsEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
