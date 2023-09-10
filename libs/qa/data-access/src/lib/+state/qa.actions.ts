/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAction, props } from '@ngrx/store';
import { QaEntity } from './qa.models';

export const initLoadQa = createAction('[Get All Qa] Init');

export const loadQaSuccess = createAction(
  '[Qa/API] Load Qa Success',
  props<{ qa: QaEntity[] }>()
);

export const loadQaFailure = createAction(
  '[Qa/API] Load Qa Failure',
  props<{ error: any }>()
);

export const initLoadQaById = createAction(
  '[Get All Qa By ID] Init',
props<{ id: string }>());

export const loadQaByIdSuccess = createAction(
  '[Qa/API] Load Qa By ID Success',
  props<{ qa: QaEntity[] }>()
);

export const loadQaByIdFailure = createAction(
  '[Qa/API] Load Qa By ID Failure',
  props<{ error: any }>()
);

export const initLoadQaByModeratorId = createAction(
  '[Get All Qa By Moderator ID] Init',
  props<{ id: string }>()
);

export const loadQaByModeratorIdSuccess = createAction(
  '[Qa/API] Load Qa By Moderator ID Success',
  props<{ qa: QaEntity[] }>()
);

export const loadQaByModeratorIdFailure = createAction(
  '[Qa/API] Load Qa By Moderator ID Failure',
  props<{ error: any }>()
);

export const initLoadSearchQa = createAction('[Get All Qa By Search Keyword] Init',
props<{ keyword: string }>());

export const loadSearchQaSuccess = createAction(
  '[Qa/API] Load Search Qa Success',
  props<{ qa: QaEntity[] }>()
);

export const loadSearchQaFailure = createAction(
  '[Qa/API] Load Search Qa Failure',
  props<{ error: any }>()
);
