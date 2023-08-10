import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IMovie } from 'src/app/modules/interfaces/movie';
import * as fromMoviesSelectors from '../../store/movies.selectors';
import * as fromMoviesActions from '../../store/movies.actions';
import { Store, select } from '@ngrx/store';
import { IMoviesState } from 'src/app/modules/store/movies.state';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { KeyValue } from '@angular/common';

@UntilDestroy()
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies$: Observable<IMovie[]>;
  sortedAndGroupedMap: Map<string, IMovie[]>;
  movieType: string = 'movie';

  @ViewChild('movieSearchInput') movieSearchInput: ElementRef;

  constructor(private readonly store: Store<IMoviesState>) {}

  ngOnInit(): void {
    this.initSubscriptionsAndWebWorker();
  }

  private initSubscriptionsAndWebWorker() {
    this.movies$ = this.store.pipe(select(fromMoviesSelectors.selectMovies));
    this.movies$.pipe(untilDestroyed(this)).subscribe((movies) => {
      if (typeof Worker !== 'undefined') {
        // Create a new
        const worker = new Worker(new URL('./app.worker', import.meta.url));
        worker.postMessage(movies);
        worker.onmessage = ({ data }) => {
          this.sortedAndGroupedMap = data.sortedAndGroupedMovies;
        };
      } else {
        // Web Workers are not supported in this environment.
        // You should add a fallback so that your program still executes correctly.
      }
    });
  }

  searchMovies(searchField: string, movieType: string): void {
    this.store.dispatch(
      fromMoviesActions.getMovies({ searchField, movieType })
    );
  }

  valueDscOrder = (
    a: KeyValue<string, IMovie[]>,
    b: KeyValue<string, IMovie[]>
  ): number => {
    return b.key.localeCompare(a.key);
  };
}
