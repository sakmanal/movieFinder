import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {

  pageTitle = 'Advanced Search';

  constructor(private router: Router) { }

  search(criteria): void {
    this.router.navigate(['/movies'], { queryParams: criteria });
  }

}
