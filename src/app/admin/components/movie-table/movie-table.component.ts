import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, of as observableOf } from 'rxjs';
import { catchError, debounceTime, filter, map, startWith, switchMap, tap } from 'rxjs/operators';
import { MockServerMovieService } from '../../services/mock-server-movies.service';
import { MovieDataset } from '../../models/movieDataset';
import { Movie } from '@core/models/movie';
import { noImg } from '@shared/helpers/noImgFound';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.css']
})
export class MovieTableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['index', 'title', 'category', 'releaseDate', 'actions'];
  data = new MatTableDataSource<Movie>([]);
  imgsrc = noImg;
  searchField = new FormControl();

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private mockServerMovieService: MockServerMovieService) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.tablePageChange();
    this.searchChange();
  }

  private tablePageChange(): void {
    // If the user changes the sort order, reset back to the first page.
    // this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    // paginator.page: Event emitted when the paginator changes the page size or page index.
    // searchField.valueChanges: Event emitted every time the value of the control changes
    merge(this.searchField.valueChanges, this.paginator.page)
      .pipe(
        startWith({}, ''),
        debounceTime(500),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.mockServerMovieService.getMovieDatasetPage(
             this.paginator.pageIndex, this.paginator.pageSize, this.searchField.value);
        }),
        map((data: MovieDataset) => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.total_count_movies;

          return data.movies;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => {
         this.updateTableSource(data);
      });
  }

  private searchChange(): void {
    this.searchField.valueChanges
    .subscribe(data => {
      if (data) {
        this.paginator.pageIndex = 0;
      }
    });
  }

  private updateTableSource(data: Movie[]): void {
    this.data = new MatTableDataSource(data);
    this.data.sort = this.sort;
  }

}
