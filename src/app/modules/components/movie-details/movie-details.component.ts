import { Component, OnInit } from '@angular/core';
import { Observable, from, take } from 'rxjs';
import { IMovie, IMovieDetails } from '../../interfaces/movie';
import { IMoviesState } from '../../store/movies.state';
import { Store, select } from '@ngrx/store';
import * as fromMoviesSelectors from '../../store/movies.selectors';
import * as fromMoviesActions from '../../store/movies.actions';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  preserveWhitespaces: true,
})
export class MovieDetailsComponent implements OnInit {
  movie$: Observable<IMovieDetails>;
  constructor(
    private readonly store: Store<IMoviesState>,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.findMovie();
    this.initSubscriptions();
  }

  private findMovie(): void {
    const movieId = this.route.snapshot.paramMap.get('id')?.toString()!;
    this.store.dispatch(fromMoviesActions.getMovieById({ movieId }));
  }

  private initSubscriptions() {
    this.movie$ = this.store.pipe(
      untilDestroyed(this),
      select(fromMoviesSelectors.selectMovie)
    );
  }
}
