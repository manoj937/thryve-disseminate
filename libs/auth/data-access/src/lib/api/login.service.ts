/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

interface User {
  email: string;
  password: string;
  loginas: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://api.thryve-disseminate.com/login';
  errorMessage: any;

  login(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user, httpOptions).pipe(
      catchError((error: any): Observable<any> => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
        return of();
      })
    );
  }
}
