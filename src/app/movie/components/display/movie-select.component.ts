import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '@core/services/movie.service';
import { Movie } from '@core/models/movie';
import { MovieParameterService } from '../../services/movie-parameter.service';
import { ToastrService } from 'ngx-toastr';
import { Categories } from '../../models/categories';
import { compareValues } from '@shared/helpers/compare';

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
  movieCategories = Categories;

  // filters
  category: string = this.movieParameterService.category;
  orderBy: string = this.movieParameterService.orderBy;
  title: string = this.movieParameterService.filterByTitle;

  constructor(private movieService: MovieService,
              private toastrService: ToastrService,
              private movieParameterService: MovieParameterService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.pageTitle = 'Movie List';
      // If parameters are passed in,
      // clear any existing filter
      if (Object.keys(params).length) {
        this.movieParameterService.removeFilters();
      }
      this.getMovies();
    });
  }

  getMovies(): void {
    this.movieService.getMovies()
       .subscribe(
        (movies: Movie[]) => {
          this.movies = [...this.performSearch(movies)];
          this.filterAndSortMovies();
        },
        (error) =>  this.toastrService.error(error),
        () => this.load = false
       );
  }

  filterAndSortMovies(): void {
    this.filteredMovies = [...this.performFilter(this.title, this.category)];
    this.sortMovies(this.orderBy);
  }

    // Local filter
    performFilter(title: string, category: string): Movie[] {
      title = title.toLocaleLowerCase();
      category = category.toLocaleLowerCase();
      let movies: Movie[];
      if (title && category !== 'all') {
        movies = this.movies.filter((movie: Movie) => movie.title.toLocaleLowerCase().indexOf(title) !== -1
                                              && movie.category.toLocaleLowerCase().indexOf(category) !== -1);
      } else if (title === '' && category !== 'all') {
        movies = this.movies.filter((movie: Movie) => movie.category.toLocaleLowerCase().indexOf(category) !== -1);
      } else if (title) {
        movies = this.movies.filter((movie: Movie) => movie.title.toLocaleLowerCase().indexOf(title) !== -1);
      } else {
        movies = this.movies;
      }
      return movies;
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

  sortMovies(order: string): void {
    switch (order) {
      case 'Rating':
        this.filteredMovies.sort(compareValues('starRating'));
        break;
      case 'Audience Approval':
        this.filteredMovies.sort(compareValues('approvalRating'));
        break;
      case 'Release Date':
        this.filteredMovies.sort(compareValues('releaseDate'));
        break;
      default:
        this.filteredMovies.sort(compareValues('id', 'ascending'));
    }
  }

  changeCategory(category: string): void {
    this.movieParameterService.category = category;
    this.category = category;
    this.filterAndSortMovies();
  }

  changeOrderBy(order: string): void {
    this.movieParameterService.orderBy = order;
    this.orderBy = order;
    this.sortMovies(order);
  }

  searchByTitle(title: string): void {
    this.movieParameterService.filterByTitle = title;
    this.title = title;
    this.filterAndSortMovies();
  }

  get displayView(): string {
    return this.movieParameterService.displayView;
  }
  changeView(view: string): void {
    this.movieParameterService.displayView = view;
  }

}
