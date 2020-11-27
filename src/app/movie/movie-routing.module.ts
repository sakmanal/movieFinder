import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieResolver } from '@core/services/movie.resolver';
import { MovieSelectComponent } from './components/display/movie-select.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';

const movieRoutes: Routes = [
  { path: '', component: MovieSelectComponent },
  { path: 'search', component: MovieSearchComponent },
  { path: 'myList', component: WatchlistComponent },
  {
    path: ':id',
    resolve: { movie: MovieResolver },
    component: MovieDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(movieRoutes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
