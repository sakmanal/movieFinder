import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { Movie } from '@core/models/movie';
import { MovieService } from '@core/services/movie.service';

@Injectable({
  providedIn: 'root'
})
export class MovieResolver implements Resolve<Movie> {

  constructor(private movieService: MovieService) { }

  resolve(route: ActivatedRouteSnapshot ): Observable<Movie> {
    const id = route.paramMap.get('id');
    return this.movieService.getMovie(+id);
  }
}
