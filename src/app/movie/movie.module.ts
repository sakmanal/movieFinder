import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieResolver } from './movie.resolver';


const movieRoutes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'search', component: MovieSearchComponent },
  {
    path: ':id',                        //resolver is called every time we navigate to this route
    resolve: { movie: MovieResolver },  //and it returns a value stored in movie property
    component: MovieDetailComponent
  },
]

@NgModule({
  declarations: [
    MovieListComponent, 
    MovieSearchComponent,
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(movieRoutes),
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MovieModule { }
