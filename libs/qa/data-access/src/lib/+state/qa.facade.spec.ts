import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { readFirst } from '@nx/angular/testing';

import * as QaActions from './qa.actions';
import { QaEffects } from './qa.effects';
import { QaFacade } from './qa.facade';
import { QaEntity } from './qa.models';
import {
  QA_FEATURE_KEY,
  QaState,
  initialQaState,
  qaReducer,
} from './qa.reducer';
import * as QaSelectors from './qa.selectors';

interface TestSchema {
  qa: QaState;
}

describe('QaFacade', () => {
  let facade: QaFacade;
  let store: Store<TestSchema>;
  const createQaEntity = (id: string, name = ''): QaEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(QA_FEATURE_KEY, qaReducer),
          EffectsModule.forFeature([QaEffects]),
        ],
        providers: [QaFacade],
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
      facade = TestBed.inject(QaFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allQa$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allQa$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadQaSuccess` to manually update list
     */
    it('allQa$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allQa$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        QaActions.loadQaSuccess({
          qa: [createQaEntity('AAA'), createQaEntity('BBB')],
        })
      );

      list = await readFirst(facade.allQa$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
