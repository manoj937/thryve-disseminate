import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as QaActions from './qa.actions';
import { QaEntity } from './qa.models';

export const QA_FEATURE_KEY = 'qa';

export interface QaState extends EntityState<QaEntity> {
  selectedId?: string | number; // which Qa record has been selected
  loaded: boolean; // has the Qa list been loaded
  error?: string | null; // last known error (if any)
}

export interface QaPartialState {
  readonly [QA_FEATURE_KEY]: QaState;
}

export const qaAdapter: EntityAdapter<QaEntity> =
  createEntityAdapter<QaEntity>();

export const initialQaState: QaState = qaAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const reducer = createReducer(
  initialQaState,
  on(QaActions.initQa, (state) => ({ ...state, loaded: false, error: null })),
  on(QaActions.loadQaSuccess, (state, { qa }) =>
    qaAdapter.setAll(qa, { ...state, loaded: true })
  ),
  on(QaActions.loadQaFailure, (state, { error }) => ({ ...state, error }))
);

export function qaReducer(state: QaState | undefined, action: Action) {
  return reducer(state, action);
}
