import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie, IMovieResponse } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies$: Observable<IMovie[]>;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movies$ = this.getMovies('tem');
  }

  getMovies(searchField: string): Observable<IMovie[]>{
    return this.movieService.getMovies(searchField);
  }

}
