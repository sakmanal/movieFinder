import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { MockServerMovieService } from '../../services/mock-server-movies.service';
import { MovieDataset } from '../../models/movieDataset';
import { Movie } from '@core/models/movie';
import { noImg } from '@shared/helpers/noImgFound';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.css']
})
export class MovieTableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['index', 'title', 'category', 'releaseDate', 'actions'];
  data = new MatTableDataSource<Movie>([]);
  imgsrc = noImg;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private mockServerMovieService: MockServerMovieService) { }

  ngOnInit() { }

  ngAfterViewInit() {
    // If the user changes the sort order, reset back to the first page.
    // this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.mockServerMovieService.getMovieDatasetPage(
             this.paginator.pageIndex, this.paginator.pageSize);
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
        this.data = new MatTableDataSource(data);
        this.data.sort = this.sort;
      });
  }

}
