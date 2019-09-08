import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  
  pageTitle = 'Movie List';
  movies: Movie[];
  filteredMovies: Movie[];
  errorMessage: string;
  load = true;

  constructor(private movieService: MovieService,
              private movieParameterService: MovieParameterService,
              private route: ActivatedRoute) { }
  
  get listFilter(): string {
    return this.movieParameterService.filterBy;
  }

  set listFilter(value: string) {
    this.movieParameterService.filterBy = value;
    this.filteredMovies = this.performFilter(this.listFilter);
  }
  


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.pageTitle = 'Movie List';
      // If parameters are passed in,
      // clear any existing filter
      if (Object.keys(params).length) {
        this.listFilter = null;
      }
      this.getMovies();
    });

    AOS.init({
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000 // values from 0 to 3000, with step 50ms
    });
  }

  getfilter(value:string){  
    this.listFilter = value;
  }
  
  getMovies(): void {
    this.movieService.getMovies()
       .subscribe(
        (movies: Movie[]) => {
          this.movies = this.performSearch(movies);
          this.filteredMovies = this.performFilter(this.listFilter);
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

    // Advanced search
  performSearch(movies: Movie[]): Movie[] {
    const params = this.route.snapshot.queryParamMap;
    if (params.keys.length) {
      this.pageTitle = 'Movie List From Advanced Search';
      return movies.filter((movie: Movie) =>
        (params.get('title') ?
          movie.title.toLocaleLowerCase().indexOf(params.get('title').toLocaleLowerCase()) !== -1 : true) &&
        (params.get('director') ?
          movie.director.toLocaleLowerCase().indexOf(params.get('director').toLocaleLowerCase()) !== -1 : true) &&
        (params.get('description') ?
          movie.description.toLocaleLowerCase().indexOf(params.get('description').toLocaleLowerCase()) !== -1 : true) &&
        (params.get('minStarRating') ? movie.starRating >= +params.get('minStarRating') : true) &&
        (params.get('maxStarRating') ? movie.starRating <= +params.get('maxStarRating') : true)
      );
    }
    return movies;
  }
}
