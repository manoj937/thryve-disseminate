import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as BlogsActions from './blogs.actions';
import { BlogsEffects } from './blogs.effects';

describe('BlogsEffects', () => {
  let actions: Observable<Action>;
  let effects: BlogsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        BlogsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(BlogsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: BlogsActions.initBlogs() });

      const expected = hot('-a-|', {
        a: BlogsActions.loadBlogsSuccess({ blogs: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
