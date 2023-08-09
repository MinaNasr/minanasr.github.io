import { IMovie, IMovieDetails } from '../interfaces/movie';

export interface IMoviesState {
  movies: IMovie[];
  movie: IMovieDetails;
}

export const initialMoviesState: IMoviesState = {
  movies: [] as IMovie[],
  movie: {} as IMovieDetails,
};
