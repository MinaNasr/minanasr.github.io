import { Action, createReducer, on } from '@ngrx/store';

import * as fromMovies from './movies.actions';
import { IMoviesState, initialMoviesState } from './movies.state';

export const featureKey = 'movies';

const moviesReducerHandler = createReducer(
    initialMoviesState,
    on(fromMovies.getMoviesSuccess, (state, action) => ({
        ...state,
        movies: action.data
    })),

);

export function moviesReducer(state: IMoviesState, action: Action) {
    return moviesReducerHandler(state, action);
}
