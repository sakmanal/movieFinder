import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ResolvedMovie } from '../models/resolvedMovie';
import { MovieService } from '@core/services/movie.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieResolver implements Resolve<ResolvedMovie> {

  constructor(
    private movieService: MovieService,
    private toastrService: ToastrService,
    private router: Router,
    ) { }

  resolve(route: ActivatedRouteSnapshot ): Observable<ResolvedMovie> {
    const id = route.paramMap.get('id');
    const param = route.paramMap.get('backurl');
    const backUrl = (param) ? param : 'movies';

    if (+id === 0) {
      this.router.navigateByUrl(backUrl);
      return of(null);
    }

    if (isNaN(+id)) {
      this.toastrService.error(`Movie id was not a number: ${id}`);
      this.router.navigateByUrl(backUrl);
      return of(null);
    }

    return this.movieService.getMovie(+id).pipe(
      map(
        movie => {
          if (movie) {
            return {movie, backUrl};
          }
          this.toastrService.error(`Movie was not found: ${id}`);
          this.router.navigateByUrl(backUrl);
          return null;
        }
      ),
      catchError(
        error => {
          this.toastrService.error(`Retrieval error: ${error}`);
          this.router.navigateByUrl(backUrl);
          return of(null);
        }
      )
    );
  }
}
