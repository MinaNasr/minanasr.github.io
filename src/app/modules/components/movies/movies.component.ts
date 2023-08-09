import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { IMovie, IMovieResponse } from 'src/app/modules/interfaces/movie';
import { MovieService } from 'src/app/modules/services/movie.service';
import * as fromMoviesSelectors from '../../store/movies.selectors';
import * as fromMoviesActions from '../../store/movies.actions';
import { Store, select } from '@ngrx/store';
import { IMoviesState } from 'src/app/modules/store/movies.state';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit, OnDestroy {
  movies$: Observable<IMovie[]>;
  destroyed = new Subject();
  sortedAndGroupedMap: Map<string, IMovie[]>
  @ViewChild('movieSearchInput') movieSearchInput: ElementRef;

  constructor(private readonly movieService: MovieService, private readonly store: Store<IMoviesState>) {}

  ngOnInit(): void {
    this.movies$ = this.store.pipe(select(fromMoviesSelectors.selectMovies));
    this.movies$.pipe(takeUntil(this.destroyed)).subscribe(movies=>{
      console.log('movies: ', movies)
      if (typeof Worker !== 'undefined') {
        // Create a new
        const worker = new Worker(new URL('./app.worker', import.meta.url));
        worker.postMessage(movies);
        worker.onmessage = ({ data }) => {
          this.sortedAndGroupedMap = data.sortedAndGroupedMovies;
          console.log(this.sortedAndGroupedMap);
        };
      } else {
        // Web Workers are not supported in this environment.
        // You should add a fallback so that your program still executes correctly.
      }
    })
  }

  searchMovies(searchField: string) {
    this.store.dispatch(fromMoviesActions.getMovies({searchField}))
  }

  ngOnDestroy(): void {
    this.destroyed.next(null);
    this.destroyed.complete();
  }
}


