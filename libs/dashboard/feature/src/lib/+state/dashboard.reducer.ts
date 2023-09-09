import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as DashboardActions from './dashboard.actions';
import { DashboardEntity } from './dashboard.models';

export const BLOGS_FEATURE_KEY = 'dashboard';

export interface DashboardState extends EntityState<DashboardEntity> {
  selectedBlogId: string | null;  // which Dashboard record has been selected
  loaded: boolean; // has the Dashboard list been loaded
  error?: string | null; // last known error (if any)
}

export interface DashboardPartialState {
  readonly [BLOGS_FEATURE_KEY]: DashboardState;
}

export function selectedBlogId(blog: DashboardEntity) {
  return blog.blogId;
}

export const dashboardAdapter: EntityAdapter<DashboardEntity> =
  createEntityAdapter<DashboardEntity>({
    selectId: selectedBlogId,
  });

export const initialDashboardState: DashboardState = dashboardAdapter.getInitialState({
  selectedBlogId: null,
  loaded: false,
});

const reducer = createReducer(
  initialDashboardState
);

export function dashboardReducer(state: DashboardState | undefined, action: Action) {
  return reducer(state, action);
}
