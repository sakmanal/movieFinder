import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css']
})
export class SelectInputComponent implements OnInit {

  selectControl = new FormControl();
  @Input() options: string[] = [];
  @Input() label = 'select option';
  @Input() set option(value: string) {
   this.selectControl.setValue(value);
  }
  @Output() optionChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.selectControl.valueChanges.pipe(
      distinctUntilChanged((prev, curr) => prev === curr),
    ).subscribe(
      value => this.optionChange.emit(value)
    );
  }

}
