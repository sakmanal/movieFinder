import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '@core/models/movie';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

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
