import { Component, OnInit } from '@angular/core';
import { WatchlistService } from '../../services/watchlist.service';
import { Movie } from '@core/models/movie';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  // myMovies$: Observable<Movie[]> = this.watchlistService.getWatchListMovies();

  constructor(private watchlistService: WatchlistService) { }

  ngOnInit() {
    // this.watchlistService.addToWatchList(2);
    this.watchlistService.getWatchListMovies().subscribe( x => console.log(x))
  }

}
