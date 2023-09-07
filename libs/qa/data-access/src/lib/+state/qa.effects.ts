import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as QaActions from './qa.actions';
import * as QaFeature from './qa.reducer';

@Injectable()
export class QaEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QaActions.initQa),
      switchMap(() => of(QaActions.loadQaSuccess({ qa: [] }))),
      catchError((error) => {
        console.error('Error', error);
        return of(QaActions.loadQaFailure({ error }));
      })
    )
  );
}
