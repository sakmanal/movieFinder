import { Component, Input } from '@angular/core';
import { WatchlistService } from '../../services/watchlist.service';

@Component({
  selector: 'app-watchlist-button',
  templateUrl: './watchlist-button.component.html',
  styleUrls: ['./watchlist-button.component.css']
})
export class WatchlistButtonComponent {


  islisted: boolean;
  id: number;
  @Input() set movieId(id: number) {
    this.id = id;
    this.islisted = this.watchlistService.islisted(id);
  }

  constructor(private watchlistService: WatchlistService) { }

  onlistedChange(listed: boolean): void {
    this.islisted = listed;
    listed ? this.addToWatchList(this.id) : this.removeFromWatchList(this.id);
  }

  private addToWatchList(movieId: number): void {
    this.watchlistService.addToWatchList(movieId);
  }

  private removeFromWatchList(movieId: number): void {
    this.watchlistService.removeFromWatchList(movieId);
  }

}
