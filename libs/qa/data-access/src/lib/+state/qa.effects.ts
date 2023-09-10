/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map } from 'rxjs';
import * as QaActions from './qa.actions';
import { QaService } from '../api/qa.service';
import { SearchQaService } from '../api/search-qa.service';
import { QaByMemberService } from '../api/qa-by-member.service';
import { QaListService } from '../api/qa-list.service';

@Injectable()
export class QaEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly qa: QaListService,
    private readonly qaById: QaService,
    private readonly qaByModeratorId: QaByMemberService,
    private readonly searchQa: SearchQaService
  ) {}

  initLoadQa$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(QaActions.initLoadQa),
      switchMap(() =>
        this.qa.getQaList().pipe(
          map((result: any) => QaActions.loadQaSuccess({ qa: result})),
          catchError((error) => of(QaActions.loadQaFailure(error)))
        )
      )
    )}
  )

  initLoadQaById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(QaActions.initLoadQaById),
      switchMap((actions) =>
        this.qaById.getQaListById(actions.id).pipe(
          map((result: any) => QaActions.loadQaByIdSuccess({ qa: result})),
          catchError((error) => of(QaActions.loadQaByIdFailure(error)))
        )
      )
    )}
  )

  initLoadQaByModeratorId$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(QaActions.initLoadQaByModeratorId),
      switchMap((actions) =>
        this.qaByModeratorId.getQaByModeratorId(actions.id).pipe(
          map((result: any) => QaActions.loadQaByModeratorIdSuccess({ qa: result})),
          catchError((error) => of(QaActions.loadQaByModeratorIdFailure(error)))
        )
      )
    )}
  )

  initLoadSearchQa$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(QaActions.initLoadSearchQa),
      switchMap((actions) =>
        this.searchQa.getQaListByKeyword(actions.keyword).pipe(
          map((result: any) => QaActions.loadQaSuccess({ qa: result})),
          catchError((error) => of(QaActions.loadQaFailure(error)))
        )
      )
    )}
  )
}
