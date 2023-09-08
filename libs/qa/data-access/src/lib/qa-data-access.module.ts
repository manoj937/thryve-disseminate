import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromQa from './+state/qa.reducer';
import { QaEffects } from './+state/qa.effects';
import { QaFacade } from './+state/qa.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromQa.QA_FEATURE_KEY, fromQa.qaReducer),
    EffectsModule.forFeature([QaEffects]),
  ],
  providers: [QaFacade],
})
export class QaDataAccessModule {
  public static forRoot(
    environment: any
  ): ModuleWithProviders<QaDataAccessModule> {
    return {
      ngModule: QaDataAccessModule,
      providers: [
        {
          provide: 'env',
          useValue: environment,
        },
      ],
    };
  }
}
