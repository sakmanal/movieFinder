import { Component, OnInit } from '@angular/core';
import { TopMoviesViews, CountryViews } from '@mock/view-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  CountryViews = [];
  TopMoviesViews = [];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  legendTitle = 'Movies';
  showXAxisLabel = true;
  xAxisLabel = 'Movies';
  showYAxisLabel = true;
  yAxisLabel = 'Views';

  constructor() {}

  ngOnInit() {
    this.TopMoviesViews = TopMoviesViews;
    this.CountryViews = CountryViews;
  }

}
