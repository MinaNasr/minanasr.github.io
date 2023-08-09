import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('movieSearchInput') movieSearchInput: ElementRef;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    // this.getMovies('tem');
  }

  getMovies(searchField: string): void{
    this.movies$ = this.movieService.getMovies(searchField);
  }

  searchMovies(searchField: string){
    this.getMovies(searchField);
  }

}
