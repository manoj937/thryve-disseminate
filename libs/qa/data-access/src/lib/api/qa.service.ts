/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QaService {
  constructor(private http: HttpClient, @Inject('env') private env:any) { }

  getQaListById(qaId: string): Observable<any>{
    return this.http.get(`${this.env.domain}/qa/${qaId}`).pipe(
      catchError((error: any): Observable<any> => {
        console.error('There was an error!', error);
        return of(error);
      })
    );
  }
}
