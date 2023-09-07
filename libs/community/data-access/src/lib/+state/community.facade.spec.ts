import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { readFirst } from '@nx/angular/testing';

import * as CommunityActions from './community.actions';
import { CommunityEffects } from './community.effects';
import { CommunityFacade } from './community.facade';
import { CommunityEntity } from './community.models';
import {
  COMMUNITY_FEATURE_KEY,
  CommunityState,
  initialCommunityState,
  communityReducer,
} from './community.reducer';
import * as CommunitySelectors from './community.selectors';

interface TestSchema {
  community: CommunityState;
}

describe('CommunityFacade', () => {
  let facade: CommunityFacade;
  let store: Store<TestSchema>;
  const createCommunityEntity = (id: string, name = ''): CommunityEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(COMMUNITY_FEATURE_KEY, communityReducer),
          EffectsModule.forFeature([CommunityEffects]),
        ],
        providers: [CommunityFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(CommunityFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allCommunity$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allCommunity$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadCommunitySuccess` to manually update list
     */
    it('allCommunity$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allCommunity$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        CommunityActions.loadCommunitySuccess({
          community: [
            createCommunityEntity('AAA'),
            createCommunityEntity('BBB'),
          ],
        })
      );

      list = await readFirst(facade.allCommunity$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
