import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AuthService } from '../../user/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  
  pageTitle = 'MovieFinder';
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  get userName(): string | null {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    } else {
      return null;
    }
  }

  constructor(changeDetectorRef: ChangeDetectorRef, 
              media: MediaMatcher, 
              private authService: AuthService,
              private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 750px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    
  }
  
  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/welcome']);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  
  

  

}
