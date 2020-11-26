import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { WatchlistService } from '../../services/watchlist.service';
import { Movie } from '@core/models/movie';
import { Observable, of, Subscription } from 'rxjs';
import { MatDrawer } from '@angular/material/sidenav';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit, OnDestroy {

  myMovies$: Observable<Movie[]> = this.watchlistService.updateMylist()
     .pipe(
       tap( (movies) => {
          this.load = false;
          if (movies && !movies.length) {
            this.toastrService.info('You can add movies to your watchlist from the Movie Detail Section.', '', { disableTimeOut: true });
          }
          // we get a new movie Array when a movie is removed from watchlist.
          // when this happends, we close the drawer
          if (this.drawer) {
            this.drawer.close();
          }
       })
     );

  error$: Subscription = this.watchlistService.errorMessage$
  .pipe(
    tap(
      (error) => {
        if (error) {
          this.load = false;
          this.toastrService.error(error);
        }
      }
    )
  ).subscribe();

  selectedMovie: Movie;
  @ViewChild('drawer', {static: false}) drawer: MatDrawer;
  load = true;

  constructor(private watchlistService: WatchlistService, private toastrService: ToastrService) { }

  ngOnInit() { }

  selectMovie(mov: Movie): void {
    if (this.selectedMovie && mov.id === this.selectedMovie.id) {
      // toggle drawer when user clicks on the same movie
      this.drawer.toggle();
    } else {
      // else select the new movie and open drawer to display its info
      this.selectedMovie = mov;
      this.drawer.open();
    }
  }

  ngOnDestroy() {
    this.error$.unsubscribe();
    this.toastrService.clear();
  }

}
