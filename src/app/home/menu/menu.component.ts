import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AuthService } from '@auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnDestroy {

  pageTitle = 'MovieFinder';
  mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;

  user$ = this.authService.getCurrentUser();

  constructor(
      private changeDetectionRef: ChangeDetectorRef,
      media: MediaMatcher,
      private authService: AuthService,
      private router: Router
    ) {
    this.mobileQuery = media.matchMedia('(max-width: 750px)');
    this.mobileQueryListener = () => { changeDetectionRef.detectChanges(); };
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/welcome']);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
  }

}
