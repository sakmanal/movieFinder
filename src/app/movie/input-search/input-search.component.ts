import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent {

  @Output() message = new EventEmitter<string>();

  set search(value:string) {
      this.message.emit(value)
  }
}
