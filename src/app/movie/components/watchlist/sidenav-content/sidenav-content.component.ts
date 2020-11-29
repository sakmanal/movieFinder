import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '@core/models/movie';
import { noImg } from '@shared/helpers/noImgFound';

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.css']
})
export class SidenavContentComponent implements OnInit {

  @Input() movie: Movie;
  imgsrc = noImg;

  constructor() { }

  ngOnInit() {
  }

}
