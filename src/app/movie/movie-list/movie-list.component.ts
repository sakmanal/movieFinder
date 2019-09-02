import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { MovieParameterService } from '../movie-parameter.service';

import * as AOS from 'aos';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  
  movies: Movie[];
  filteredMovies: Movie[];
  errorMessage: string;
  load = true;

  constructor(private movieService: MovieService,
    private movieParameterService: MovieParameterService) { }
  
  get listFilter(): string {
    return this.movieParameterService.filterBy;
  }

  set listFilter(value: string) {
    this.movieParameterService.filterBy = value;
    this.filteredMovies = this.performFilter(this.listFilter);
  }
  


  ngOnInit() {
    this.getMovies();

    AOS.init({
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000 // values from 0 to 3000, with step 50ms
    });
  }
  
  getMovies(): void {
    this.movieService.getMovies()
       .subscribe(
        (movies: Movie[]) => { this.movies = movies;
                               this.filteredMovies = movies;
                             },
        (error) =>  this.errorMessage = error,
        () => this.load = false
       )
  }

    // Local filter
    performFilter(filterBy: string): Movie[] {
      if (filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.movies.filter((movie: Movie) => movie.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
      } else {
        return this.movies;
      }
    }
}
