import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as CommunityActions from './community.actions';
import { CommunityEffects } from './community.effects';

describe('CommunityEffects', () => {
  let actions: Observable<Action>;
  let effects: CommunityEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        CommunityEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(CommunityEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: CommunityActions.initCommunity() });

      const expected = hot('-a-|', {
        a: CommunityActions.loadCommunitySuccess({ community: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
