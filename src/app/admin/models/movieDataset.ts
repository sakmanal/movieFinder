import { Movie } from '@core/models/movie';

export interface MovieDataset {
  movies: Movie[];
  total_count_movies: number;
}
