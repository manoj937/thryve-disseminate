import { Injectable, inject } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as QaActions from './qa.actions';
import * as QaFeature from './qa.reducer';
import * as QaSelectors from './qa.selectors';

@Injectable()
export class QaFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(QaSelectors.selectQaLoaded));
  allQa$ = this.store.pipe(select(QaSelectors.selectAllQa));
  selectedQa$ = this.store.pipe(select(QaSelectors.selectEntity));

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(QaActions.initQa());
  }
}
