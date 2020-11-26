import { Movie } from '@core/models/movie';

export interface ResolvedMovie {
  movie: Movie;
  backUrl: string;
}
