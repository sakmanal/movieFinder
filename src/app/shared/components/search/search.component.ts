import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchField = new FormControl();
  @Input() placeholder = 'Search...';
  @Input() set search(value: string) {
   this.searchField.setValue(value);
  }
  @Output() searchChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.searchField.valueChanges.pipe(
      distinctUntilChanged((prev, curr) => prev === curr),
    ).subscribe(
      value => this.searchChange.emit(value)
    );
  }

  clear() {
    this.searchField.setValue('');
  }

}
