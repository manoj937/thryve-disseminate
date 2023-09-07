import { QaEntity } from './qa.models';
import { qaAdapter, QaPartialState, initialQaState } from './qa.reducer';
import * as QaSelectors from './qa.selectors';

describe('Qa Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getQaId = (it: QaEntity) => it.id;
  const createQaEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as QaEntity);

  let state: QaPartialState;

  beforeEach(() => {
    state = {
      qa: qaAdapter.setAll(
        [
          createQaEntity('PRODUCT-AAA'),
          createQaEntity('PRODUCT-BBB'),
          createQaEntity('PRODUCT-CCC'),
        ],
        {
          ...initialQaState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Qa Selectors', () => {
    it('selectAllQa() should return the list of Qa', () => {
      const results = QaSelectors.selectAllQa(state);
      const selId = getQaId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = QaSelectors.selectEntity(state) as QaEntity;
      const selId = getQaId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectQaLoaded() should return the current "loaded" status', () => {
      const result = QaSelectors.selectQaLoaded(state);

      expect(result).toBe(true);
    });

    it('selectQaError() should return the current "error" state', () => {
      const result = QaSelectors.selectQaError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
