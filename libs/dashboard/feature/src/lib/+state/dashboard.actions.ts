import { createAction, props } from '@ngrx/store';
import { DashboardEntity } from './dashboard.models';

export const getModerator = createAction('[Dashboard/API] Moderator');

export const getModeratorSuccess = createAction(
  '[Dashboard/API] Get Moderator Success',
  props<{ dashboard: DashboardEntity[] }>()
);

export const getModeratorFailure = createAction(
  '[Dashboard/API] Get Moderator Failure',
  props<{ error: any }>()
);