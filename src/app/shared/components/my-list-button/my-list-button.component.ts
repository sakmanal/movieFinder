import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-list-button',
  templateUrl: './my-list-button.component.html',
  styleUrls: ['./my-list-button.component.css']
})
export class MyListButtonComponent implements OnInit {

  @Input() listed: boolean;
  @Output() listedChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  listMovie(): void {
    this.listed = !this.listed;
    this.listedChange.emit(this.listed);
  }

}
