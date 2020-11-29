import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '@core/models/movie';
import { noImg } from '@shared/helpers/noImgFound';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: Movie;
  imgsrc = noImg;

  constructor() { }

  ngOnInit() {
  }

}
