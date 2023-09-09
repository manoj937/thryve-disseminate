/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map } from 'rxjs';
import * as DashboardActions from './dashboard.actions';
import { DashboardService } from '../api/dashboard.service';

@Injectable()
export class DashboardEffects {
  init$(init$: any) {
    throw new Error('Method not implemented.');
  }
  constructor(
    private readonly actions$: Actions,
    private readonly dashboard: DashboardService,
  ) {}


}
