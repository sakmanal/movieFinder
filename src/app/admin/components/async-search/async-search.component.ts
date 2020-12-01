import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { switchMap, debounceTime, tap, finalize, startWith, filter } from 'rxjs/operators';
import { Movie } from '@core/models/movie';
import { MockServerMovieService } from '../../services/mock-server-movies.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-async-search',
  templateUrl: './async-search.component.html',
  styleUrls: ['./async-search.component.css']
})
export class AsyncSearchComponent implements OnInit {

  filteredMovies: Movie[] = [];
  movieForm: FormGroup;
  isLoading = false;
  @Output() searchChange = new EventEmitter<Movie>();

  constructor(private fb: FormBuilder, private mockServerMovieService: MockServerMovieService) {}

  ngOnInit() {
    this.movieForm = this.fb.group({
      userInput: null
    });

    this.movieForm.get('userInput').valueChanges.pipe(
      startWith(''),
      // delay emits
      debounceTime(500),
      // prevent search after movie selection
      // when movie is selected, movieForm value changes from type 'string'
      // to type 'Movie (<mat-option [value]="movie">)
      // or type 'number' (<mat-option [value]="movie.id">)
      filter(value => typeof value === 'string'),
      tap(() => this.isLoading = true),
      // use switch map to cancel previous subscribed events, before creating new once
      switchMap(
        (value: string) => this.mockServerMovieService.getSearchedMovie(value)
        //  .pipe(finalize(() => this.isLoading = false))
      )
    )
    .subscribe(data => {
      this.filteredMovies = data.movies;
      this.isLoading = false;
    });

  }

  displayFn(mov: Movie): string {
    if (mov) { return mov.title; }
  }

  onselect(event: MatAutocompleteSelectedEvent): void {
    this.searchChange.emit(event.option.value.id);
  }

}
