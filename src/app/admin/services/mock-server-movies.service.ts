import { Injectable } from '@angular/core';
import { MovieService } from '@core/services/movie.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MovieDataset } from '../models/movieDataset';

@Injectable({
  providedIn: 'root'
})
export class MockServerMovieService {

  constructor(private movieService: MovieService) { }

  getMovieDatasetPage(pageNumber: number, pageSize: number = 8): Observable<MovieDataset> {
    return this.movieService.getMovies().pipe(
      map( movies => {
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
}

