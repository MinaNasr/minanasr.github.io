import { createAction, props } from '@ngrx/store';
import { IMovie, IMovieDetails, IMovieResponse } from '../interfaces/movie';

const prefix = '[Movies]';

export const getMovies = createAction(
  `${prefix} Get movies`,
  props<{
    searchField: string;
    movieType: string;
  }>()
);

export const getMoviesSuccess = createAction(
  `${prefix} Get movies success`,
  props<{
    data: IMovie[];
  }>()
);

export const getMovieById = createAction(
  `${prefix} Get movie by Id`,
  props<{
    movieId: string;
  }>()
);

export const getMovieByIdSuccess = createAction(
  `${prefix} Get movie by Id Success`,
  props<{
    data: IMovieDetails;
  }>()
);
