import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  
  movies: Movie[];
  errorMessage: string;
  load = true;
  
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }
  
  getMovies(): void {
    this.movieService.getMovies()
       .subscribe(
        (movies: Movie[]) => this.movies = movies,
        (error) =>  this.errorMessage = error,
        () => this.load = false
       )
  }
}
