import { Injectable, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as DashboardActions from './dashboard.actions';
import * as DashboardSelectors from './dashboard.selectors';

@Injectable()
export class DashboardFacade {
  init() {
    throw new Error('Method not implemented.');
  }
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(DashboardSelectors.selectDashboardLoaded));
  allDashboard$ = this.store.pipe(select(DashboardSelectors.selectAllDashboard));
  selectedDashboard$ = this.store.pipe(select(DashboardSelectors.selectEntity));

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
 
}
