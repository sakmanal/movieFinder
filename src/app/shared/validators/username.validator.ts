import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { AuthService } from '@auth/services/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsernameValidator {

  constructor(private authService: AuthService) { }

  availableUsername(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      return this.authService.checkAvailableUserName(control.value)
        .pipe(
          map((result: boolean) => result ? null : { userNameExists: true })
        );
    };
  }
}
