import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ LoginComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
    ]),
    MaterialModule,
    FormsModule

  ]
})
export class UserModule { }
