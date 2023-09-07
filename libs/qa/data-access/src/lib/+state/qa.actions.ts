import { createAction, props } from '@ngrx/store';
import { QaEntity } from './qa.models';

export const initQa = createAction('[Qa Page] Init');

export const loadQaSuccess = createAction(
  '[Qa/API] Load Qa Success',
  props<{ qa: QaEntity[] }>()
);

export const loadQaFailure = createAction(
  '[Qa/API] Load Qa Failure',
  props<{ error: any }>()
);
