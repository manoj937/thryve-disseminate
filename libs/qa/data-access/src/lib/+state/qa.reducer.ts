import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as QaActions from './qa.actions';
import { QaEntity } from './qa.models';

export const QA_FEATURE_KEY = 'qa';

export interface QaState extends EntityState<QaEntity> {
  selectedQaId: string | null;  // which Blogs record has been selected
  loaded: boolean; // has the Blogs list been loaded
  error?: string | null; // last known error (if any)
}

export interface QaPartialState {
  readonly [QA_FEATURE_KEY]: QaState;
}

export function selectedQaId(qa: QaEntity) {
  return qa.qaId;
}

export const qaAdapter: EntityAdapter<QaEntity> =
  createEntityAdapter<QaEntity>({
    selectId: selectedQaId,
  });

export const initialQaState: QaState = qaAdapter.getInitialState({
  selectedQaId: null,
  loaded: false,
});

const reducer = createReducer(
  initialQaState,
  on(QaActions.initLoadQa, (state) => ({ ...state, loaded: false, error: null })),
  on(QaActions.loadQaSuccess, (state, { qa }) =>
    qaAdapter.setAll(qa, { ...state, loaded: true })
  ),
  on(QaActions.loadQaFailure, (state, { error }) => ({ ...state, error })),
  on(QaActions.loadQaByIdSuccess, (state, action) =>
    qaAdapter.setAll(action.qa, { ...state, loaded: true })
  ),
  on(QaActions.loadQaByModeratorIdSuccess, (state, action) =>
    qaAdapter.setAll(action.qa, { ...state, loaded: true })
  ),
  on(QaActions.loadSearchQaSuccess, (state, action) =>
    qaAdapter.setAll(action.qa, { ...state, loaded: true })
  ),
);

export function qaReducer(state: QaState | undefined, action: Action) {
  return reducer(state, action);
}
