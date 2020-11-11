import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { ForgotComponent } from './components/forgot/forgot.component';

const authRoutes: Routes = [
  {
    path: '',
    component: AuthPageComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: SignupComponent },
      { path: 'forgotPass', component: ForgotComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
