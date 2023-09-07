/* eslint-disable @typescript-eslint/no-explicit-any */
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCommunity from './+state/community.reducer';
import { CommunityEffects } from './+state/community.effects';
import { CommunityFacade } from './+state/community.facade';
import { AddCommunityService } from './api/add-community.service';
import { CommunitiesService } from './api/communities.service';
import { DeleteCommunityService } from './api/delete-community.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromCommunity.COMMUNITY_FEATURE_KEY,
      fromCommunity.communityReducer
    ),
    EffectsModule.forFeature([CommunityEffects])
  ],
  providers: [CommunityFacade],
})
export class CommunityDataAccessModule {
  public static forRoot(
    environment: any
  ): ModuleWithProviders<CommunityDataAccessModule> {
    return {
      ngModule: CommunityDataAccessModule,
      providers: [
        AddCommunityService,
        CommunitiesService,
        DeleteCommunityService,
        {
          provide: 'env',
          useValue: environment,
        },
      ],
    };
  }
}
