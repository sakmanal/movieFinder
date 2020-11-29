import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from '@core/models/movie';
import { noImg } from '@shared/helpers/noImgFound';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;
  backUrl: string;
  imgsrc = noImg;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const dataName = 'movie';
    const data = this.route.snapshot.data[dataName];
    if (data && data.movie.id) {
      this.movie = data.movie;
      this.backUrl = data.backUrl;
    }
  }

  onBack(): void {
    this.router.navigateByUrl(this.backUrl);
  }

}
