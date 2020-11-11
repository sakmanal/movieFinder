import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  errorMessage = '';
  hidePassword = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService
  ) {
    this.createForm();
   }

  ngOnInit() { }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public get form() {
    return this.loginForm.controls;
  }

  public onSubmit() {

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.authService.login(this.loginForm.value)
        .pipe(first())
        .subscribe(
           () => {
                if (this.authService.redirectUrl) {
                  this.toastr.success('Logged in successfully!');
                  this.router.navigateByUrl(this.authService.redirectUrl);
                } else {
                  this.toastr.success('Logged in successfully!');
                  this.router.navigate(['/']);
                }
            },
            error => {
                this.errorMessage = error;
                this.toastr.error(error);
                this.loading = false;
            }
        );
  }

  loginAsAdmin() {
    this.form.password.setValue('pass');
    this.form.username.setValue('admin');
    this.onSubmit();
  }

  loginAsJohn() {
    this.form.password.setValue('123');
    this.form.username.setValue('john');
    this.onSubmit();
  }

}
