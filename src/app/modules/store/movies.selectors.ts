import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IMoviesState } from './movies.state';

const selectMoviesState = createFeatureSelector<IMoviesState>('moviesStore');

export const selectMovies = createSelector(
  selectMoviesState,
  (state) => state.movies
);
export const selectMovie = createSelector(
  selectMoviesState,
  (state) => state.movie
);
