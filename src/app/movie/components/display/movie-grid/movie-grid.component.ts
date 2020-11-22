import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../../models/movie';
import * as AOS from 'aos';

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
    AOS.init({
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      once: true // whether animation should happen only once - while scrolling down
    });
  }

}
