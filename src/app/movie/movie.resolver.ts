import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { Movie } from './movie';
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root'
})
export class MovieResolver implements Resolve<Movie> {

  constructor(private movieService: MovieService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Movie> {
    const id = route.paramMap.get('id');    //we get the param 'id' as a string
    return this.movieService.getMovie(+id); //with '+' we convert string to number 
  }
}