import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject, throwError } from 'rxjs';
import { LocalStorageService } from '@core/services/local-storage.service';
import { Movie } from '@core/models/movie';
import { MovieService } from '@core/services/movie.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  /**
   * We could also use BehaviorSubject.
   * The last value is cached. A subscriber will get the latest value upon initial subscription
   * Every time a Component gets 'myWatchListSub' as observale (subscribes to 'updateMylist()')
   * first wiil get an initial value -- the last emitted movies (last value of 'myWatchListSub'),
   * then will get the last updated movies with 'myWatchListSub.next(...)' (e.g every time a movie is removed from watchlist)
   *
   * with Subject a subscriber will only get published values that were emitted after the subscription.
   */
  // private myWatchListSub: BehaviorSubject<Movie[]> = new BehaviorSubject([]);
  private myWatchListSub: Subject<Movie[]> = new Subject();

  private errorMessage: Subject<string> = new Subject<string>();
  errorMessage$: Observable<string> = this.errorMessage.asObservable();

  private mylist: Movie[] = [];

  constructor(private localStorageService: LocalStorageService, private movieService: MovieService) { }

  addToWatchList(movieID: number): Observable<boolean> {
    const list = this.localStorageService.getItem('WatchList');
    if (list) {
      this.saveToList(movieID, list);
    } else {
      this.makelist(movieID);
    }
    return of(true);
  }

  removeFromWatchList(movieID: number): Observable<boolean> {
    const list = this.getMoviesIDlist();
    if (list.length) {
      this.rmFromList(movieID, list);
      this.mylist = this.mylist.filter(mov => mov.id !== movieID);
      this.myWatchListSub.next(this.mylist);
      return of(true);
    }
    return of(null);
  }

  islisted(movieID: number): boolean {
    const moviesIDlist: number[] = this.getMoviesIDlist();
    return moviesIDlist.includes(movieID);
  }

  private getWatchListMovies(): Observable<Movie[]> {
    const moviesIDlist: number[] = this.getMoviesIDlist();
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

  updateMylist(): Observable<Movie[]> {
    this.getWatchListMovies().subscribe(
      mylist => {
        this.mylist = mylist;
        this.myWatchListSub.next(mylist);
      },
      error => {
        console.error(error);
        this.errorMessage.next(error);
      }
    );
    return this.getMyWatchList();
  }

  getMyWatchList(): Observable<Movie[]> {
    return this.myWatchListSub.asObservable();
  }

  private makelist(id: number): void {
   this.localStorageService.setItem('WatchList', [id]);
  }

  private saveToList(movieID: number, moviesIDlist: number[]): void {
    if (moviesIDlist.includes(movieID)) { return; }
    moviesIDlist.push(movieID);
    this.localStorageService.setItem('WatchList', moviesIDlist);
  }

  private rmFromList(movieID: number, moviesIDlist: number[]): void {
    moviesIDlist =  moviesIDlist.filter(id => id !== movieID);
    this.localStorageService.setItem('WatchList', moviesIDlist);
  }

  private getMoviesIDlist(): number[] | [] {
    return this.localStorageService.getItem('WatchList') || [];
  }
}


