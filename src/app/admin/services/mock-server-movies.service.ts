import { Injectable } from '@angular/core';
import { MovieService } from '@core/services/movie.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { MovieDataset } from '../models/movieDataset';
import { Movie } from '@core/models/movie';

@Injectable({
  providedIn: 'root'
})
export class MockServerMovieService {

  constructor(private movieService: MovieService) { }

  getMovieDatasetPage(pageNumber: number, pageSize: number = 8, filterTitle?: string): Observable<MovieDataset> {
    return this.movieService.getMovies().pipe(
      map( movies => {
         // Not making Pagination & filtering in the server since in-memory-web-api has somewhat restricted api
        if (filterTitle) {
          movies = movies.filter(movie => movie.title.toLocaleLowerCase().indexOf(filterTitle) !== -1);
        }
        const movieDataset = [];
        const totalElements = movies.length;
        const totalPages = totalElements / pageSize;
        const start = pageNumber * pageSize;
        const end = Math.min(start + pageSize, totalElements);
        for (let i = start; i < end; i++) {
          movieDataset.push(movies[i]);
        }

        return {
          movies: movieDataset,
          total_count_movies: movies.length
        };
      })
    );
  }

  getSearchedMovie(title: string): Observable<MovieDataset> {
    if (!title || title.trim() === '') {
      return of({
        movies: [],
        total_count_movies: 0
      });
    }
    title = title.toLocaleLowerCase();
    return this.movieService.getMovies().pipe(
      map( movies =>  {
        // Not filtering in the server since in-memory-web-api has somewhat restricted api
        movies = movies.filter(movie => movie.title.toLocaleLowerCase().indexOf(title) !== -1);
        return {
          movies,
          total_count_movies: movies.length
        };
      })
    );
  }
}

