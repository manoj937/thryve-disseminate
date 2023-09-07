import { Action } from '@ngrx/store';

import * as BlogsActions from './blogs.actions';
import { BlogsEntity } from './blogs.models';
import { BlogsState, initialBlogsState, blogsReducer } from './blogs.reducer';

describe('Blogs Reducer', () => {
  const createBlogsEntity = (id: string, name = ''): BlogsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Blogs actions', () => {
    it('loadBlogsSuccess should return the list of known Blogs', () => {
      const blogs = [
        createBlogsEntity('PRODUCT-AAA'),
        createBlogsEntity('PRODUCT-zzz'),
      ];
      const action = BlogsActions.loadBlogsSuccess({ blogs });

      const result: BlogsState = blogsReducer(initialBlogsState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = blogsReducer(initialBlogsState, action);

      expect(result).toBe(initialBlogsState);
    });
  });
});
