import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BLOGS_FEATURE_KEY, DashboardState, dashboardAdapter } from './dashboard.reducer';

// Lookup the 'Dashboard' feature state managed by NgRx
export const selectDashboardState =
  createFeatureSelector<DashboardState>(BLOGS_FEATURE_KEY);

const { selectAll, selectEntities } = dashboardAdapter.getSelectors();

export const selectDashboardLoaded = createSelector(
  selectDashboardState,
  (state: DashboardState) => state.loaded
);

export const selectDashboardError = createSelector(
  selectDashboardState,
  (state: DashboardState) => state.error
);

export const selectAllDashboard = createSelector(
  selectDashboardState,
  (state: DashboardState) => selectAll(state)
);

export const selectDashboardEntities = createSelector(
  selectDashboardState,
  (state: DashboardState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectDashboardState,
  (state: DashboardState) => state.selectedBlogId
);

export const selectEntity = createSelector(
  selectDashboardEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
