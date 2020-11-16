import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchFilter = new EventEmitter<string>();

  set search(value: string) {
      this.searchFilter.emit(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
