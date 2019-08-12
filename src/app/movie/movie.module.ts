import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';


const movieRoutes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'search', component: MovieSearchComponent }
]

@NgModule({
  declarations: [MovieListComponent, MovieSearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(movieRoutes)
  ]
})
export class MovieModule { }
