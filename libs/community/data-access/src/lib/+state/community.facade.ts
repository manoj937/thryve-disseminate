import { Injectable, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as CommunityActions from './community.actions';
import * as CommunitySelectors from './community.selectors';
import { CommunityEntity } from './community.models';

@Injectable()
export class CommunityFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(CommunitySelectors.selectCommunityLoaded));
  allCommunity$ = this.store.pipe(
    select(CommunitySelectors.selectAllCommunity)
  );
  selectedCommunity$ = this.store.pipe(select(CommunitySelectors.selectEntity));

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */

  initCommunityCreation(community: CommunityEntity) {
    this.store.dispatch(CommunityActions.initCommunityCreation({result: community}));
  }

  initLoadCommunities() {
    this.store.dispatch(CommunityActions.initLoadCommunities());
  }

  initCommunityDeletion(communityId: string) {
    this.store.dispatch(CommunityActions.initCommunityDeletion({ communityId }));
  }
}
