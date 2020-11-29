import { Component, OnInit, Input } from '@angular/core';
import { noImg } from '@shared/helpers/noImgFound';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {

  @Input() posterImgUrl;
  imgsrc = noImg;

  constructor() { }

  ngOnInit() {
  }

}
