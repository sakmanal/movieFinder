import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie';
import { MovieParameterService } from '../services/movie-parameter.service';
import { ToastrService } from 'ngx-toastr';
import { Categories } from '../models/categories';

type DisplayView = 'list' | 'grid';

@Component({
  selector: 'app-movie-select',
  templateUrl: './movie-select.component.html',
  styleUrls: ['./movie-select.component.scss'],
  // Need to remove view encapsulation so that the custom tooltip style defined in
  // `tooltip-custom-class-example.css` will not be scoped to this component's view.
  encapsulation: ViewEncapsulation.None
})
export class MovieSelectComponent implements OnInit {

  pageTitle = 'Movie List';
  movies: Movie[];
  filteredMovies: Movie[];
  load = true;
  displayView: DisplayView = 'list';
  movieCategories = Categories;
  orderBy = 'Rating';

  constructor(private movieService: MovieService,
              private toastrService: ToastrService,
              private movieParameterService: MovieParameterService,
              private route: ActivatedRoute) { }

  get listFilter(): string {
    return this.movieParameterService.filterBy;
  }
  set listFilter(value: string) {
    this.movieParameterService.filterBy = value;
    this.filteredMovies = this.performFilter(this.listFilter);
  }

  get orderView(): string {
    return this.orderBy;
  }
  set orderView(order: string) {
    this.orderBy = order;
    console.log(order)
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
  }

  getfilter(value: string) {
    this.listFilter = value;
  }

  getMovies(): void {
    this.movieService.getMovies()
       .subscribe(
        (movies: Movie[]) => {
          this.movies = this.performSearch(movies);
          this.filteredMovies = this.performFilter(this.listFilter);
        },
        (error) =>  this.toastrService.error(error),
        () => this.load = false
       );
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
      this.pageTitle = 'Advanced Search';
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

  changeView(view: DisplayView): void {
    this.displayView = view;
  }
}
