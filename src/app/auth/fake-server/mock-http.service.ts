import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { LoginResponse, RegisterResponse, AvailableUserResponse } from '../models/authResponces';
import { Token } from '../models/token';
import { LoginFormData, RegisterFormData } from '../models/authData';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class MockHttpService {

  constructor() { }

  post(url: string, data: any, headers?: any): Observable<any> {
    switch (url) {
      case `${environment.apiUrl}/login`:
        return this.fakeLogin(data as LoginFormData);
      case `${environment.apiUrl}/refresh-token`:
        return this.fakeRefreshToken();
      case `${environment.apiUrl}/user/recoverymail`:
        return this.fakeMailRecovery(data.email as string);
      case `${environment.apiUrl}/register`:
        return this.fakeRegister(data as RegisterFormData);
      case `${environment.apiUrl}/user/isUsernameAvailable`:
        return this.fakeCheckAvailableUserName(data.name as string);
      default:
        return of(null);
    }
  }

  get(url: string): Observable<any> {
     switch (url) {
       case `${environment.apiUrl}/current-user`:
        return this.fakefetchCurrentUser();
       default:
        return of(null);
     }
  }

  private fakeLogin(data: LoginFormData): Observable<LoginResponse> {
    if (this.checkCredentials(data.username, data.password)) {
      localStorage.setItem('username', JSON.stringify(data.username));
      return of({
        accessToken: 'sndkjfhveufhgujh.uashdfuyhduf.kasjfukwhdf',
        refreshToken: 'uwer8oity479yjwbui.uweyruiyhuifyi.asiuwehryuey3rhpu',
        user: {
          id: 10034,
          userName: data.username,
          isAdmin: (data.username === 'admin')
        }
      }).pipe(delay(1500));
    } else {
      return throwError({
        message: 'wrong credentials',
        status: 401
      });
    }
  }

  private fakeRegister(data: RegisterFormData): Observable<RegisterResponse> {
    return of({
      success: true,
      message: 'Please check your email for login details.',
      user: {
        id: 10067,
        userName: data.username,
        isAdmin: false,
        email: data.email
      }
    }).pipe(delay(1500));
  }

  private checkCredentials(username: string, password: string): boolean {
     return  (username === 'admin' && password === 'pass') || (username === 'john' && password === '123');
  }

  private fakeRefreshToken(): Observable<Token> {
    return of({
      accessToken: 'sndkjfhveufhgujh.uashdfuyhduf.kasjfukwhdf',
      refreshToken: 'uwer8oity479yjwbui.uweyruiyhuifyi.asiuwehryuey3rhpu'
    });
  }

  private fakefetchCurrentUser(): Observable<User> {
    try {
      const userName = JSON.parse(localStorage.getItem('username'));
      return of({
        id: 10034,
        userName,
        isAdmin: false
      });
    } catch (e) {
      return of(null);
    }
  }

  private fakeMailRecovery(email: string): Observable<{message: string}> {
    // return throwError('Email address not found')
    // tslint:disable-next-line: max-line-length
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (reg.test(String(email).toLowerCase())) {
      return of({
        message: `Recovery instructions sent at ${email}`
      });
    } else {
      return throwError('Invalid email address');
    }
  }

  private fakeCheckAvailableUserName(name: string): Observable<AvailableUserResponse> {
    const usernames = ['admin', 'john', 'alex', 'peter'];
    const isAvailable = !usernames.includes(name.toLowerCase());
    return of({
      isAvailable,
      username: name
    }).pipe(delay(2000));
  }
}
