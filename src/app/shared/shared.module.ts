import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerComponent } from './spinner/spinner.component';
import { StarComponent } from './star/star.component';

import { RangeValidatorDirective } from './range.directive';



@NgModule({
  declarations: [
    SpinnerComponent,
    StarComponent,
    RangeValidatorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    SpinnerComponent,
    StarComponent,
    RangeValidatorDirective
  ]
})
export class SharedModule { }
