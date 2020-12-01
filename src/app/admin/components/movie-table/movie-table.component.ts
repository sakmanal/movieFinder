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
    //  this.searchChange();
  }

  private tablePageChange(): void {
    // If the user changes the sort order, reset back to the first page.
    // this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    // we can use merge with sort and pagination in case we want
    // data to be sorted by the server
    // merge(this.sort.sortChange, this.paginator.page)

    // Event emitted when the paginator changes the page size or page index.
    // when this happends we fetch page data from the server
    // this.paginator.page
    merge(this.searchField.valueChanges, this.paginator.page)
      .pipe(
        startWith({}),
        debounceTime(500),
        // disable fetching page data from server if there is a search Filter Input
        // filter(() => !this.searchField.value),
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

  // private searchChange(): void {
  //   this.searchField.valueChanges.pipe(
  //     startWith(''),
  //     map(
  //       (value: string) => {
  //         // if search input is clear, emit paginator pageEvent to update Table with data from server
  //         if (!value) {
  //           this.paginator.page.next();
  //           return null;
  //         }
  //         return value;
  //       }
  //     ),
  //     filter(value => !!value),
  //     // delay emits
  //     debounceTime(500),
  //     tap(() => this.isLoadingResults = true),
  //     // use switch map to cancel previous subscribed events, before creating new once
  //     switchMap(
  //       (value: string) => {
  //         return this.mockServerMovieService.getSearchedMovie(value);
  //       }
  //     ),
  //     map((data: MovieDataset) => {
  //       // Flip flag to show that loading has finished.
  //       this.isLoadingResults = false;
  //       this.resultsLength = data.total_count_movies;

  //       return data.movies;
  //     }),
  //   )
  //   .subscribe(data => {
  //       this.updateTableSource(data);
  //       this.data.paginator = this.paginator;
  //   });
  // }

  private updateTableSource(data: Movie[]): void {
    this.data = new MatTableDataSource(data);
    this.data.sort = this.sort;
  }

}
