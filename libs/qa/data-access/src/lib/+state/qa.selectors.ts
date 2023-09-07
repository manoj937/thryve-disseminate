import { createFeatureSelector, createSelector } from '@ngrx/store';
import { QA_FEATURE_KEY, QaState, qaAdapter } from './qa.reducer';

// Lookup the 'Qa' feature state managed by NgRx
export const selectQaState = createFeatureSelector<QaState>(QA_FEATURE_KEY);

const { selectAll, selectEntities } = qaAdapter.getSelectors();

export const selectQaLoaded = createSelector(
  selectQaState,
  (state: QaState) => state.loaded
);

export const selectQaError = createSelector(
  selectQaState,
  (state: QaState) => state.error
);

export const selectAllQa = createSelector(selectQaState, (state: QaState) =>
  selectAll(state)
);

export const selectQaEntities = createSelector(
  selectQaState,
  (state: QaState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectQaState,
  (state: QaState) => state.selectedId
);

export const selectEntity = createSelector(
  selectQaEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
