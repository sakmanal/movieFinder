import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {

  @Input() posterImgUrl = 'https://image.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg';

  constructor() { }

  ngOnInit() {
  }

}
