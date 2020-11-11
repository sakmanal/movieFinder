import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { mustMatch } from '@shared/validators/must-match.validator';
import { MatDialog } from '@angular/material/dialog';
import { TermsDialogComponent } from '../terms-dialog/terms-dialog.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  hidePassword = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private authService: AuthService
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  private createForm() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validator: mustMatch('password', 'confirmPassword')
    });
  }

  get form() {
    return this.registerForm.controls;
  }

  onSubmit() {

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.loading = true;
    this.authService.register(this.registerForm.value)
        .pipe(first())
        .subscribe(
           (res) => {
              this.loading = false;
              this.toastr.success('You account was created successfully!', `Hello ${res.username}`, { disableTimeOut: true });
              this.toastr.warning(res.message, '', { disableTimeOut: true });
              this.router.navigate(['/auth/login']);
            },
            error => {
              this.toastr.error(error);
              this.loading = false;
            }
        );
  }

  openTermsDialog() {
    this.dialog.open(TermsDialogComponent);
  }



}
