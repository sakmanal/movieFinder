import { Component, OnInit } from '@angular/core';
import { TopMoviesViews, CountryViews } from '@mock/view-data';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit() {
    this.TopMoviesViews = TopMoviesViews;
    this.CountryViews = CountryViews;
  }

  onSearch(movieId: number) {
    this.router.navigate(['admin/movies/edit', movieId]);
  }

}
