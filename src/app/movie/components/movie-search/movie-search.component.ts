import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {

  pageTitle = 'Advanced Search';
  @ViewChild(NgForm, { static: true }) searchForm: NgForm;

  constructor(private router: Router) { }

  search(): void {
    this.router.navigate(['/movies'], { queryParams: this.searchForm.value });
  }

}
