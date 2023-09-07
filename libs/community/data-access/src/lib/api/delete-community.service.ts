/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteCommunityService {

  constructor(private http: HttpClient, @Inject('env') private env:any) {}

  deleteCommunity(id: string): Observable<string> {
    return this.http.delete<string>(this.env.domain+"/communities/delete/"+id).pipe(
      catchError((error: any): Observable<any> => {
        console.error('There was an error!', error);
        return of();
      })
    );
  }
}
