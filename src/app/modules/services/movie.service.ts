import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { IMovie, IMovieDetails, IMovieResponse } from '../interfaces/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private API_URL = 'http://www.omdbapi.com/';
  private API_KEY = '8ea39b15';

  constructor(private http: HttpClient) {}

  getMovies(searchField: string, movieType?: string): Observable<IMovie[]> {
    if(!movieType){
      movieType = 'movie';
    }
    return this.http
      .get<IMovieResponse>(
        `${this.API_URL}?s=${searchField}&type=${movieType}&apikey=${this.API_KEY}`
      )
      .pipe(map((res: IMovieResponse) => res.Search), catchError(()=> of([])));
  }

  getMoviesById(id: string): Observable<IMovieDetails> {
    return this.http.get<IMovieDetails>(
      `${this.API_URL}?i=${id}&apikey=${this.API_KEY}`
    );
  }
}
