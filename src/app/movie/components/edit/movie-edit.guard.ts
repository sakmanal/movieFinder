import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { MovieEditComponent } from './movie-edit/movie-edit.component';

@Injectable({
  providedIn: 'root'
})
export class MovieEditGuard implements CanDeactivate<MovieEditComponent> {

    canDeactivate(component: MovieEditComponent): boolean {

        //component is dirty if it contains unsaved work
        if (component.isDirty) {
            const title = component.movie.title || 'New Movie';

            //displays JavaScript Window confirm() Method
            //The confirm() method returns true if the user clicked "OK", and false otherwise (cancel button).
            //if false we prevent switching route
            return confirm(`Navigate away and lose all changes to ${title}?`);
        }

        //we can switch route
        return true;
    }
}