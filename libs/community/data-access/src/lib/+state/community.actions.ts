/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAction, props } from '@ngrx/store';
import { CommunityEntity } from './community.models';

/* Community Creation Starts*/
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
/* Community Creation Ends*/


/* Fetch All Communities Starts*/

export const initLoadCommunities = createAction('[Get All Communitys] Init');

export const loadCommunitySuccess = createAction(
  '[Community/API] Load Community Success',
  props<{ community: CommunityEntity[] }>()
);

export const loadCommunityFailure = createAction(
  '[Community/API] Load Community Failure',
  props<{ error: any }>()
);

/* Fetch All Communities Ends*/


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

/* Delete Community Starts*/

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

/* Delete Community Ends*/

export const initModeratorRequest = createAction(
  '[Moderator Community Request Page] Init',
  props<{ communityId: string, moderatorId: string }>()
);

export const moderatorRequestSuccess = createAction(
  '[Community/API] Moderator Community Request Success',
  props<{ communityId: string }>()
);

export const moderatorRequestFailure = createAction(
  '[Community/API] Moderator Community Request Failure',
  props<{ error: any }>()
);

export const initModeratorApprove = createAction(
  '[Moderator Community Approve Page] Init',
  props<{ communityId: string, moderatorId: string }>()
);

export const moderatorApproveSuccess = createAction(
  '[Community/API] Moderator Community Approve Success',
  props<{ communityId: string }>()
);

export const moderatorApproveFailure = createAction(
  '[Community/API] Moderator Community Approve Failure',
  props<{ error: any }>()
);