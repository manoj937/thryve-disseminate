import { Action } from '@ngrx/store';

import * as QaActions from './qa.actions';
import { QaEntity } from './qa.models';
import { QaState, initialQaState, qaReducer } from './qa.reducer';

describe('Qa Reducer', () => {
  const createQaEntity = (id: string, name = ''): QaEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Qa actions', () => {
    it('loadQaSuccess should return the list of known Qa', () => {
      const qa = [createQaEntity('PRODUCT-AAA'), createQaEntity('PRODUCT-zzz')];
      const action = QaActions.loadQaSuccess({ qa });

      const result: QaState = qaReducer(initialQaState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = qaReducer(initialQaState, action);

      expect(result).toBe(initialQaState);
    });
  });
});
