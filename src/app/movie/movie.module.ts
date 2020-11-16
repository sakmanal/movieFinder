import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { MovieSelectComponent } from './display/movie-select.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieEditComponent } from './edit/movie-edit/movie-edit.component';
import { MovieEditInfoComponent } from './edit/movie-edit-info/movie-edit-info.component';
import { MovieEditTagsComponent } from './edit/movie-edit-tags/movie-edit-tags.component';
import { MovieEditReactiveComponent } from './edit/movie-edit-reactive/movie-edit-reactive.component';


import { MovieResolver } from './services/movie.resolver';
import { MovieEditGuard } from './edit/movie-edit.guard';
import { MovieListComponent } from './display/movie-list/movie-list.component';
import { MovieGridComponent } from './display/movie-grid/movie-grid.component';


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
  declarations: [
    MovieSelectComponent,
    MovieSearchComponent,
    MovieDetailComponent,
    MovieEditComponent,
    MovieEditInfoComponent,
    MovieEditTagsComponent,
    MovieEditReactiveComponent,
    MovieListComponent,
    MovieGridComponent
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
