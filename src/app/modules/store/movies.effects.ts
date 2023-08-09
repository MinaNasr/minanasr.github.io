import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, switchMap, tap } from 'rxjs/operators';


import * as fromMovies from './movies.actions';
import { MovieService } from '../services/movie.service';
import { IMovie, IMovieResponse } from '../interfaces/movie';

@Injectable()
export class moviesEffects {
    getMovies$ = createEffect(() =>{

        console.log('helloo')
        return this.actions$.pipe(
            ofType(fromMovies.getMovies),
            switchMap(({searchField})=> this.movieService.getMovies(searchField)),
            map((data: IMovie[]) => fromMovies.getMoviesSuccess({ data }))
           
        )
    }
    );

    // getMoviesById$ = createEffect(()=>
    //         this.actions$.pipe(
    //             ofType(fromMovies.getMovieById),
    //             switchMap(({id})=>this.movieService.getMoviesById(id)),
    //             map((data: IMovie) => fromMovies.getMovieByIdSuccess({ data }))
    //         )
    // )

    constructor(
        private readonly actions$: Actions,
        private readonly movieService: MovieService,
    ) {}
}
