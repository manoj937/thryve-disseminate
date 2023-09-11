/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberRequestCommunityService {
  constructor(private http: HttpClient, @Inject('env') private env:any) { }

  moderatorRequest(communityId: string, moderatorId: string): Observable<any>{
    return this.http.patch(`${this.env.domain}/communities/request/${communityId}`, { moderatorId }).pipe(
      catchError((error: any): Observable<any> => {
        console.error('There was an error!', error);
        return of(error);
      })
    );
  }
}
