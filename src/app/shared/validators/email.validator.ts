import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { AuthService } from '@auth/services/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailValidator {

  constructor(private authService: AuthService) { }

  availableEmail(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      return this.authService.checkAvailableEmail(control.value)
        .pipe(
          map((result: boolean) => result ? null : { emailExists: true })
        );
    };
  }
}
