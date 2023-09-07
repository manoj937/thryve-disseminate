import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  COMMUNITY_FEATURE_KEY,
  CommunityState,
  communityAdapter,
} from './community.reducer';

// Lookup the 'Community' feature state managed by NgRx
export const selectCommunityState = createFeatureSelector<CommunityState>(
  COMMUNITY_FEATURE_KEY
);

const { selectAll, selectEntities } = communityAdapter.getSelectors();

export const selectCommunityLoaded = createSelector(
  selectCommunityState,
  (state: CommunityState) => state.loaded
);

export const selectCommunityError = createSelector(
  selectCommunityState,
  (state: CommunityState) => state.error
);

export const selectAllCommunity = createSelector(
  selectCommunityState,
  (state: CommunityState) => selectAll(state)
);

export const selectCommunityEntities = createSelector(
  selectCommunityState,
  (state: CommunityState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectCommunityState,
  (state: CommunityState) => state.selectedCommunityId
);

export const selectEntity = createSelector(
  selectCommunityEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
