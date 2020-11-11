import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { MaterialModule } from '../material.module';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgotComponent } from './components/forgot/forgot.component';
import { TermsDialogComponent } from './components/terms-dialog/terms-dialog.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    AuthPageComponent,
    ForgotComponent,
    TermsDialogComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [
    TermsDialogComponent
  ]
})
export class AuthModule { }
