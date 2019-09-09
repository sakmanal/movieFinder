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
import { MovieEditComponent } from './edit/movie-edit/movie-edit.component';
import { MovieEditInfoComponent } from './edit/movie-edit-info/movie-edit-info.component';
import { MovieEditTagsComponent } from './edit/movie-edit-tags/movie-edit-tags.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { MovieEditReactiveComponent } from './edit/movie-edit-reactive/movie-edit-reactive.component';


import { MovieResolver } from './movie.resolver';
import { MovieEditGuard } from './edit/movie-edit.guard';


const movieRoutes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'search', component: MovieSearchComponent },
  {
    path: ':id',                        //resolver is called every time we navigate to this route
    resolve: { movie: MovieResolver },  //and it returns a value(movie) stored in movie property
    component: MovieDetailComponent
  },
  {
    path: ':id/edit',
    resolve: { movie: MovieResolver },
    canDeactivate: [MovieEditGuard],   // prevents switching route (navigate to different path from :id/edit)
    component: MovieEditComponent,
    children: [
      { path: '', redirectTo: 'info', pathMatch: 'full' },
      { path: 'info', component: MovieEditInfoComponent },
      { path: 'tags', component: MovieEditTagsComponent }
    ]
  },
  {
    path: ':id/editReactive',
    resolve: { movie: MovieResolver },
    component: MovieEditReactiveComponent
  },
]

@NgModule({
  declarations: [
    MovieListComponent, 
    MovieSearchComponent,
    MovieDetailComponent,
    MovieEditComponent,
    MovieEditInfoComponent,
    MovieEditTagsComponent,
    InputSearchComponent,
    MovieEditReactiveComponent
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
