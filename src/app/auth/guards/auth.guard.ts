import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLoggedIn(state.url, route);
  }

  private checkLoggedIn(url: string, route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.authService.getCurrentUser().pipe(
      map( user => {
        if (user) {
          // check if route is restricted by role
          if (route.data.roles && !route.data.roles.includes(user.role)) {
            // role not authorized so redirect to home page
            this.router.navigate(['/']);
            return false;
          }

          // authorized so return true
          return true;
        }

        // not logged in so redirect to login page
        this.authService.redirectUrl = url;
        return false;
      })
    );
  }

}
