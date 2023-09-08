import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as CommunityActions from './community.actions';
import { CommunityEntity } from './community.models';

export const COMMUNITY_FEATURE_KEY = 'community';

export interface CommunityState extends EntityState<CommunityEntity> {
  selectedCommunityId: string | null; 
  loaded: boolean; 
  error?: string | null;
}

export interface CommunityPartialState {
  readonly [COMMUNITY_FEATURE_KEY]: CommunityState;
}

export function selectedCommunityId(community: CommunityEntity) {
  return community.communityId;
}

export const communityAdapter: EntityAdapter<CommunityEntity> =
  createEntityAdapter<CommunityEntity>({
    selectId: selectedCommunityId,
  });

export const initialCommunityState: CommunityState =
  communityAdapter.getInitialState({
    selectedCommunityId: null,
    loaded: false,
  });

const reducer = createReducer(
  initialCommunityState,
  on(CommunityActions.initCommunityCreation, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(CommunityActions.initLoadCommunities, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(CommunityActions.loadCommunitySuccess, (state, action) => communityAdapter.setAll(action.community, {
      ...state,
      loaded: true,
    })
  ),
  on(CommunityActions.loadCommunityFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(CommunityActions.communityCreationSuccess, (state, action) =>
    communityAdapter.addOne(action.result, state)
  ),
  on(CommunityActions.communityCreationFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(CommunityActions.deleteCommunitySuccess, (state, action) =>
    communityAdapter.removeOne(action.communityId, state)
  ),
  on(CommunityActions.deleteCommunityFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function communityReducer(
  state: CommunityState | undefined,
  action: Action
) {
  return reducer(state, action);
}
