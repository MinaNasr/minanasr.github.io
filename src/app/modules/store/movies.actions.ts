import { createAction, props } from '@ngrx/store';
import { IMovie, IMovieResponse } from '../interfaces/movie';

const prefix = '[Movies]';

export const getMovies = createAction(
  `${prefix} Get movies`,
  props<{
    searchField: string;
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
        id: string
    }>()
)

export const getMovieByIdSuccess = createAction(
  `${prefix} Get movie by Id Success`,
    props<{
      data: IMovie;
    }>()
)
