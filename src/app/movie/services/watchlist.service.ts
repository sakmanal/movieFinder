import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LocalStorageService } from '@core/services/local-storage.service';
import { Movie } from '@core/models/movie';
import { MovieService } from '@core/services/movie.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  private myWatchListSub: BehaviorSubject<Movie[]> = new BehaviorSubject([]);
  private mylist: Movie[];

  constructor(private localStorageService: LocalStorageService, private movieService: MovieService) {
    this.updateMylist();
  }

  addToWatchList(movieID: number): Observable<boolean> {
    const list = this.localStorageService.getItem('WatchList');
    if (list) {
      this.saveToList(movieID, list);
    } else {
      this.makelist(movieID);
    }
    this.updateMylist();   //ke only one movie and add it to mylist and then next it
    return of(true);
  }

  removeFromWatchList(movieID: number): Observable<boolean> {
    const list = this.getMoviesIDlist();
    if (list.length) {
      this.rmFromList(movieID, list);
      // this.updateMylist();
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

  private updateMylist(): void {
    this.getWatchListMovies().subscribe(
      mylist => {
        this.mylist = mylist;
        this.myWatchListSub.next(mylist);
      }
    );
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


