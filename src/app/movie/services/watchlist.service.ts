import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from '@core/services/local-storage.service';
import { Movie } from '@core/models/movie';
import { MovieService } from '@core/services/movie.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  constructor(private localStorageService: LocalStorageService, private movieService: MovieService) { }

  addToWatchList(movieID: number): Observable<boolean> {
    const list = this.localStorageService.getItem('WatchList');
    if (list) {
      this.saveToLIst(movieID, list);
    } else {
      this.makelist(movieID);
    }
    return of(true);
  }

  getWatchListMovies(): Observable<Movie[]> {
    const moviesIDlist: number[] = this.localStorageService.getItem('WatchList');
    return this.movieService.getMovies().
      pipe(
        map( movies => {
          const mylist: Movie[] = [];
          movies.forEach( movie => {
            if (moviesIDlist.includes(movie.id)) {
               mylist.push(movie);
            }
          });
          return mylist;
        })
      );
  }

  private makelist(id: number): void {
   this.localStorageService.setItem('WatchList', [id]);
  }

  private saveToLIst(movieID: number, moviesIDlist: number[]) {
    if (moviesIDlist.includes(movieID)) { return; }
    moviesIDlist.push(movieID);
    this.localStorageService.setItem('WatchList', moviesIDlist);
  }
}


