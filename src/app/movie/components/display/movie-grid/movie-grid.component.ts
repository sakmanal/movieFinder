import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '@core/models/movie';
@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.css']
})
export class MovieGridComponent implements OnInit {

  movieData: Movie[];
  @Input() set movies(data: Movie[]) {
    this.movieData = data;
  }

  get movies(): Movie[] {
    return this.movieData;
  }

  constructor() { }

  ngOnInit() {
  }

}
