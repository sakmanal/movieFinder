import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieResolver } from './services/movie.resolver';
import { MovieEditGuard } from './components/edit/movie-edit.guard';
import { MovieSelectComponent } from './components/display/movie-select.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieEditComponent } from './components/edit/movie-edit/movie-edit.component';
import { MovieEditInfoComponent } from './components/edit/movie-edit-info/movie-edit-info.component';
import { MovieEditTagsComponent } from './components/edit/movie-edit-tags/movie-edit-tags.component';
import { MovieEditReactiveComponent } from './components/edit/movie-edit-reactive/movie-edit-reactive.component';

const movieRoutes: Routes = [
  { path: '', component: MovieSelectComponent },
  { path: 'search', component: MovieSearchComponent },
  {
    path: ':id',
    resolve: { movie: MovieResolver },
    component: MovieDetailComponent
  },
  {
    path: ':id/edit',
    resolve: { movie: MovieResolver },
    canDeactivate: [MovieEditGuard],
    component: MovieEditComponent,
    children: [
      { path: '', redirectTo: 'info', pathMatch: 'full' },
      { path: 'info', component: MovieEditInfoComponent },
      { path: 'tags', component: MovieEditTagsComponent }
    ]
  },
  {
    path: ':id/editReactive',
    component: MovieEditReactiveComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(movieRoutes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
