/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAction, props } from '@ngrx/store';
import { CommunityEntity } from './community.models';

export const initCommunityCreation = createAction(
  '[Community Creation Page] Init',
  props<{ result: CommunityEntity }>()
);

export const communityCreationSuccess = createAction(
  '[Community/API] Community Creation Success',
  props<{ result: CommunityEntity }>()
);

export const communityCreationFailure = createAction(
  '[Community/API] Community Creation Failure',
  props<{ error: any }>()
);

export const initLoadCommunities = createAction('[Get All Communitys] Init');

export const loadCommunitySuccess = createAction(
  '[Community/API] Load Community Success',
  props<{ community: CommunityEntity[] }>()
);

export const loadCommunityFailure = createAction(
  '[Community/API] Load Community Failure',
  props<{ error: any }>()
);

export const initCommunityUpdation = createAction(
  '[Update Community Page] Init',
  props<{ communityId: string; community: CommunityEntity }>()
);

export const updateCommunitySuccess = createAction(
  '[Community/API] Community Updation Success',
  props<{ result: CommunityEntity }>()
);

export const updateCommunityFailure = createAction(
  '[Community/API] Community Updation Failure',
  props<{ error: any }>()
);

export const initCommunityDeletion = createAction(
  '[Community Deletion Page] Init',
  props<{ communityId: string }>()
);

export const deleteCommunitySuccess = createAction(
  '[Community/API] Community Deletion Success',
  props<{ communityId: string }>()
);

export const deleteCommunityFailure = createAction(
  '[Community/API] Community Deletion Failure',
  props<{ error: any }>()
);
