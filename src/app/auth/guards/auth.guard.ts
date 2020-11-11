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
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLoggedIn(state.url);
  }

  private checkLoggedIn(url: string): Observable<boolean> {
    return this.authService.getCurrentUser().pipe(
      map(user => !!user),
      map((isLogged: boolean) => {
        if (!isLogged) {
          // Retain the attempted URL for redirection
          this.authService.redirectUrl = url;
          this.router.navigate(['/auth']);
          return false;
        }
        return true;
      })
    );
  }

}
