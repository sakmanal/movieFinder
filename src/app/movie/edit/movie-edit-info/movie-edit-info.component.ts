import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Movie } from '../../movie';

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
    //use resolver to get the movie 
    // Watch for changes to the resolve data 
    this.route.parent.data.subscribe(data => {
      const dataName = 'movie';
      this.movie = data[dataName];
      
      //reset form 
      if (this.movieForm) {
        this.movieForm.reset();
      }
    });

  }

}
