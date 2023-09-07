/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private http: HttpClient, @Inject('env') private env:any) { }
  
  getBlogsList(): Observable<any>{
    return this.http.get(`${this.env.domain}/blogs`).pipe(
      catchError((error: any): Observable<any> => {
        console.error('There was an error!', error);
        return of(error);
      })
    );
  }
}
