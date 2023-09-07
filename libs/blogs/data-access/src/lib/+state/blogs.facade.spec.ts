import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { readFirst } from '@nx/angular/testing';

import * as BlogsActions from './blogs.actions';
import { BlogsEffects } from './blogs.effects';
import { BlogsFacade } from './blogs.facade';
import { BlogsEntity } from './blogs.models';
import {
  BLOGS_FEATURE_KEY,
  BlogsState,
  initialBlogsState,
  blogsReducer,
} from './blogs.reducer';
import * as BlogsSelectors from './blogs.selectors';

interface TestSchema {
  blogs: BlogsState;
}

describe('BlogsFacade', () => {
  let facade: BlogsFacade;
  let store: Store<TestSchema>;
  const createBlogsEntity = (id: string, name = ''): BlogsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(BLOGS_FEATURE_KEY, blogsReducer),
          EffectsModule.forFeature([BlogsEffects]),
        ],
        providers: [BlogsFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(BlogsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allBlogs$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allBlogs$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadBlogsSuccess` to manually update list
     */
    it('allBlogs$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allBlogs$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        BlogsActions.loadBlogsSuccess({
          blogs: [createBlogsEntity('AAA'), createBlogsEntity('BBB')],
        })
      );

      list = await readFirst(facade.allBlogs$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
