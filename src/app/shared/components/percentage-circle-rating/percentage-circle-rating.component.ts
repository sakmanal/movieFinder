import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-percentage-circle-rating',
  templateUrl: './percentage-circle-rating.component.html',
  styleUrls: ['./percentage-circle-rating.component.css']
})
export class PercentageCircleRatingComponent implements OnInit {

  @Input() value: number;

  constructor() { }

  ngOnInit() {
  }

}
