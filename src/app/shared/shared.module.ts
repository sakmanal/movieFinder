import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { StarComponent } from './star/star.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    StarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    SpinnerComponent,
    StarComponent
  ]
})
export class SharedModule { }
