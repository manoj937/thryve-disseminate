import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as QaActions from './qa.actions';
import { QaEffects } from './qa.effects';

describe('QaEffects', () => {
  let actions: Observable<Action>;
  let effects: QaEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        QaEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(QaEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: QaActions.initLoadQa() });

      const expected = hot('-a-|', { a: QaActions.loadQaSuccess({ qa: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
