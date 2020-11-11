import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { MockHttpService } from '../fake-server/mock-http.service';

@Injectable({
  providedIn: 'root'
})
export class ForgotpassService {

  constructor(
    /* private http: HttpClient */
    private http: MockHttpService // fake http client
    ) { }

  recoveryMail(email: string): Observable<{message: string}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${environment.apiUrl}/recoverymail`, { email }, { headers });
  }
}
