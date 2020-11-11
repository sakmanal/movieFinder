import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { environment } from '@env/environment';
import { User } from '../models/user';
import { LoginResponse } from '../models/loginResponce';
import { LocalStorageService } from './local-storage.service';
import { Token } from '../models/token';
import { LoginData } from '../models/logindata';
import { MockHttpService } from '../fake-server/mock-http.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user$ =  new BehaviorSubject<User>(null);
  private redirectUrlink: string;

  constructor(/* private http: HttpClient, */
              private http: MockHttpService, // fake http client
              private localStorageService: LocalStorageService) { }

  login(form: LoginData): Observable<LoginResponse> {
    return this.http.post/* <LoginResponse> */(`${environment.apiUrl}/login`, form, this.headers)
      .pipe(
        tap((response: LoginResponse) => {
          this.user$.next(response.user);
          this.setToken('token', response.accessToken);
          this.setToken('refreshToken', response.refreshToken);
        }),
        catchError(this.handleError)
      );
  }

  logout(): void {
    this.localStorageService.removeItem('token');
    this.localStorageService.removeItem('refreshToken');
    this.user$.next(null);
  }

  getCurrentUser(): Observable<User> {
    return this.user$.pipe(
      switchMap(user => {
        // check if we already have user data
        if (user) {
          return of(user);
        }

        const token = this.localStorageService.getItem('token');
        // if there is token then fetch the current user
        if (token) {
          return this.fetchCurrentUser();
        }

        return of(null);
      })
    );
  }

  private fetchCurrentUser(): Observable<User> {
    return this.http.get/* <User> */(`${environment.apiUrl}/current-user`)
      .pipe(
        tap((user: User) => {
          this.user$.next(user);
        })
      );
  }

  refreshToken(): Observable<Token> {
    const refreshToken = this.localStorageService.getItem('refreshToken');

    return this.http.post/* <Token> */(`${environment.apiUrl}/refresh-token`, { refreshToken }, this.headers)
      .pipe(
          tap((response: Token) => {
            this.setToken('token', response.accessToken);
            this.setToken('refreshToken', response.refreshToken);
          })
      );
  }

  private setToken(key: string, token: string): void {
    this.localStorageService.setItem(key, token);
  }

  private get headers() {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  get redirectUrl(): string {
    return this.redirectUrlink;
  }

  set redirectUrl(url: string) {
    this.redirectUrlink = url;
  }

    private handleError(err: HttpErrorResponse) {
      let errorMessage: string;
      if (err.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Backend returned code ${err.status}: ${err.message}`;
      }
      console.error(err);
      return throwError(errorMessage);
  }

}
