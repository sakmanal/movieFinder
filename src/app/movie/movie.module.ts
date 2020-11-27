import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MovieSelectComponent } from './components/display/movie-select.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieListComponent } from './components/display/movie-list/movie-list.component';
import { MovieGridComponent } from './components/display/movie-grid/movie-grid.component';
import { MovieRoutingModule } from './movie-routing.module';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { WatchlistButtonComponent } from './components/watchlist-button/watchlist-button.component';
import { SidenavContentComponent } from './components/watchlist/sidenav-content/sidenav-content.component';

@NgModule({
  declarations: [
    MovieSelectComponent,
    MovieSearchComponent,
    MovieDetailComponent,
    MovieListComponent,
    MovieGridComponent,
    WatchlistComponent,
    WatchlistButtonComponent,
    SidenavContentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }
