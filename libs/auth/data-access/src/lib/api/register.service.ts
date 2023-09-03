/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

interface Resister {
  name: string;
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {}

  baseUrl = 'http://api.thryve-disseminate.com/register';
  errorMessage: any;

  register(user: Resister): Observable<Resister> {
    return this.http.post<Resister>(this.baseUrl, user, httpOptions).pipe(
      catchError((error: any): Observable<any> => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
        return of();
      })
    );
  }
}
