import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './components/star/star.component';
import { RangeValidatorDirective } from './directives/range.directive';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectInputComponent } from './components/select-input/select-input.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { MyListButtonComponent } from './components/my-list-button/my-list-button.component';
import { PosterComponent } from './components/poster/poster.component';
import { PercentageCircleRatingComponent } from './components/percentage-circle-rating/percentage-circle-rating.component';

@NgModule({
  declarations: [
    StarComponent,
    RangeValidatorDirective,
    SpinnerComponent,
    MovieCardComponent,
    SearchComponent,
    SelectInputComponent,
    ScrollTopComponent,
    MyListButtonComponent,
    PosterComponent,
    PercentageCircleRatingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    SpinnerComponent,
    StarComponent,
    RangeValidatorDirective,
    MovieCardComponent,
    SearchComponent,
    SelectInputComponent,
    ScrollTopComponent,
    MyListButtonComponent,
    PosterComponent,
    PercentageCircleRatingComponent
  ]
})
export class SharedModule { }
