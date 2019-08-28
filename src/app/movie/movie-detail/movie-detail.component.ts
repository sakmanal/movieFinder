import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;
  errorMessage: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    //dataname should be the same as resolver property in routes path
    const dataName = 'movie';
    this.movie = this.route.snapshot.data[dataName];
  }

  onBack(): void {
    this.router.navigate(['/movies']);
  }

}
