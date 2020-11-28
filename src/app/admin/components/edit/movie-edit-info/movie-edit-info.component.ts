import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Movie } from '@core/models/movie';

@Component({
  selector: 'app-movie-edit-info',
  templateUrl: './movie-edit-info.component.html',
  styleUrls: ['./movie-edit-info.component.css']
})
export class MovieEditInfoComponent implements OnInit {

  @ViewChild(NgForm, { static: true }) movieForm: NgForm;
  movie: Movie;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.data.subscribe(data => {
      const dataName = 'movie';
      this.movie = data[dataName].movie;

      // reset form
      if (this.movieForm) {
        this.movieForm.reset();
      }
    });

  }

}
