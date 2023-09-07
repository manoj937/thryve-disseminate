import { Action } from '@ngrx/store';

import * as CommunityActions from './community.actions';
import { CommunityEntity } from './community.models';
import {
  CommunityState,
  initialCommunityState,
  communityReducer,
} from './community.reducer';

describe('Community Reducer', () => {
  const createCommunityEntity = (id: string, name = ''): CommunityEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Community actions', () => {
    it('loadCommunitySuccess should return the list of known Community', () => {
      const community = [
        createCommunityEntity('PRODUCT-AAA'),
        createCommunityEntity('PRODUCT-zzz'),
      ];
      const action = CommunityActions.loadCommunitySuccess({ community });

      const result: CommunityState = communityReducer(
        initialCommunityState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = communityReducer(initialCommunityState, action);

      expect(result).toBe(initialCommunityState);
    });
  });
});
