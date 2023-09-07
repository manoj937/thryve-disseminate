import { CommunityEntity } from './community.models';
import {
  communityAdapter,
  CommunityPartialState,
  initialCommunityState,
} from './community.reducer';
import * as CommunitySelectors from './community.selectors';

describe('Community Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCommunityId = (it: CommunityEntity) => it.id;
  const createCommunityEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as CommunityEntity);

  let state: CommunityPartialState;

  beforeEach(() => {
    state = {
      community: communityAdapter.setAll(
        [
          createCommunityEntity('PRODUCT-AAA'),
          createCommunityEntity('PRODUCT-BBB'),
          createCommunityEntity('PRODUCT-CCC'),
        ],
        {
          ...initialCommunityState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Community Selectors', () => {
    it('selectAllCommunity() should return the list of Community', () => {
      const results = CommunitySelectors.selectAllCommunity(state);
      const selId = getCommunityId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = CommunitySelectors.selectEntity(state) as CommunityEntity;
      const selId = getCommunityId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectCommunityLoaded() should return the current "loaded" status', () => {
      const result = CommunitySelectors.selectCommunityLoaded(state);

      expect(result).toBe(true);
    });

    it('selectCommunityError() should return the current "error" state', () => {
      const result = CommunitySelectors.selectCommunityError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
