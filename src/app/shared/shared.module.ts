import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './components/star/star.component';
import { RangeValidatorDirective } from './directives/range.directive';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StarComponent,
    RangeValidatorDirective,
    SpinnerComponent,
    MovieCardComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    SpinnerComponent,
    StarComponent,
    RangeValidatorDirective,
    MovieCardComponent,
    SearchComponent
  ]
})
export class SharedModule { }
