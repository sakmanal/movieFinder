import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './components/star/star.component';
import { RangeValidatorDirective } from './directives/range.directive';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    StarComponent,
    RangeValidatorDirective,
    SpinnerComponent
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
