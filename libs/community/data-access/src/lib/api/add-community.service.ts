/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { CommunityEntity } from '../+state/community.models';

@Injectable({
  providedIn: 'root'
})
export class AddCommunityService {

  constructor(private http: HttpClient, @Inject('env') private env:any) {}

  addCommunity(community: CommunityEntity): Observable<CommunityEntity> {
    return this.http.post<CommunityEntity>(this.env.domain+'/communities', community).pipe(
      catchError((error: any): Observable<any> => {
        console.error('There was an error!', error);
        return of();
      })
    );
  }
}
