import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '@app/movie/models/movie';
import * as AOS from 'aos';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: Movie;

  constructor() { }

  ngOnInit() {
  }

}
