import { BlogsEntity } from './blogs.models';
import {
  blogsAdapter,
  BlogsPartialState,
  initialBlogsState,
} from './blogs.reducer';
import * as BlogsSelectors from './blogs.selectors';

describe('Blogs Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getBlogsId = (it: BlogsEntity) => it.id;
  const createBlogsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as BlogsEntity);

  let state: BlogsPartialState;

  beforeEach(() => {
    state = {
      blogs: blogsAdapter.setAll(
        [
          createBlogsEntity('PRODUCT-AAA'),
          createBlogsEntity('PRODUCT-BBB'),
          createBlogsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialBlogsState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Blogs Selectors', () => {
    it('selectAllBlogs() should return the list of Blogs', () => {
      const results = BlogsSelectors.selectAllBlogs(state);
      const selId = getBlogsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = BlogsSelectors.selectEntity(state) as BlogsEntity;
      const selId = getBlogsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectBlogsLoaded() should return the current "loaded" status', () => {
      const result = BlogsSelectors.selectBlogsLoaded(state);

      expect(result).toBe(true);
    });

    it('selectBlogsError() should return the current "error" state', () => {
      const result = BlogsSelectors.selectBlogsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
