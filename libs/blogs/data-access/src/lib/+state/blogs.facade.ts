import { Injectable, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as BlogsActions from './blogs.actions';
import * as BlogsSelectors from './blogs.selectors';

@Injectable()
export class BlogsFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(BlogsSelectors.selectBlogsLoaded));
  allBlogs$ = this.store.pipe(select(BlogsSelectors.selectAllBlogs));
  selectedBlogs$ = this.store.pipe(select(BlogsSelectors.selectEntity));

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  initLoadBlogs() {
    this.store.dispatch(BlogsActions.initLoadBlogs());
  }
}
