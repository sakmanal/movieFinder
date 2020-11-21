import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../../models/movie';
import * as AOS from 'aos';

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
    AOS.init({
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 500 // values from 0 to 3000, with step 50ms
    });
  }

}
