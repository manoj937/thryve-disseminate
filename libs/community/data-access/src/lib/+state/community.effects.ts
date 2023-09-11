import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map } from 'rxjs';
import * as CommunityActions from './community.actions';
import { AddCommunityService } from '../api/add-community.service';
import { CommunitiesService } from '../api/communities.service';
import { DeleteCommunityService } from '../api/delete-community.service';
import { MemberRequestCommunityService } from '../api/member-request-community.service';
import { MemberApproveCommunityService } from '../api/member-approve-community.service';

@Injectable()
export class CommunityEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly createCommunity: AddCommunityService,
    private readonly communities: CommunitiesService,
    private readonly deleteCommunity: DeleteCommunityService,
    private readonly memberRequestCommunityService: MemberRequestCommunityService,
    private readonly memberApproveCommunityService: MemberApproveCommunityService
  ) {}

  initCommunityCreation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommunityActions.initCommunityCreation),
      switchMap((action) =>
        this.createCommunity.addCommunity(action.result).pipe(
          map((result) => CommunityActions.communityCreationSuccess({ result })),
          catchError((error) =>
            of(CommunityActions.communityCreationFailure(error))
          )
        )
      )
    )
  );

  initLoadCommunities$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CommunityActions.initLoadCommunities, CommunityActions.deleteCommunitySuccess),
      switchMap(() =>
        this.communities.getCommunityList().pipe(
          map((result) => CommunityActions.loadCommunitySuccess({ community: result})),
          catchError((error) => of(CommunityActions.loadCommunityFailure(error)))
        )
      )
    )}
  )

  initCommunityDeletion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommunityActions.initCommunityDeletion),
      switchMap((action) =>
        this.deleteCommunity.deleteCommunity(action.communityId).pipe(
          map((result) =>
            CommunityActions.deleteCommunitySuccess({ communityId: result })
          ),
          catchError((error) =>
            of(CommunityActions.deleteCommunityFailure(error))
          )
        )
      )
    )
  );

  initModeratorRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommunityActions.initModeratorApprove),
      switchMap((action) =>
        this.memberApproveCommunityService.moderatorApprove(action.communityId, action.moderatorId).pipe(
          map((result) =>
            CommunityActions.moderatorApproveSuccess({ communityId: result })
          ),
          catchError((error) =>
            of(CommunityActions.moderatorApproveFailure(error))
          )
        )
      )
    )
  );

}
