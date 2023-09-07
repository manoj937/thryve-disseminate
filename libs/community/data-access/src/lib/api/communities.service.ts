/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunitiesService {

  constructor(private http: HttpClient, @Inject('env') private env:any) { }
  
  getCommunityList(): Observable<any>{
    return this.http.get(`${this.env.domain}/communities`).pipe(
      catchError((error: any): Observable<any> => {
        console.error('There was an error!', error);
        return of(error);
      })
    );
  }
  
}
