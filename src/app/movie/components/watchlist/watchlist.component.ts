import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WatchlistService } from '../../services/watchlist.service';
import { Movie } from '@core/models/movie';
import { Observable } from 'rxjs';
import { MatDrawer } from '@angular/material/sidenav';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  myMovies$: Observable<Movie[]> = this.watchlistService.getMyWatchList()
    .pipe(
      tap(() => this.load = false)
    );

  selectedMovie: Movie;
  @ViewChild('drawer', {static: false}) drawer: MatDrawer;
  load = true;

  constructor(private watchlistService: WatchlistService) { }

  ngOnInit() {
    // this.watchlistService.getWatchListMovies().subscribe( x => console.log(x))
  }

  selectMovie(mov: Movie): void {
    if (this.selectedMovie && mov.id === this.selectedMovie.id) {
      this.drawer.toggle();
    } else {
      this.selectedMovie = mov;
      this.drawer.open();
    }
  }

}
