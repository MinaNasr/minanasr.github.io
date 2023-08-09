import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IMovie, IMovieResponse } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private API_URL = 'http://www.omdbapi.com/';
  private API_KEY = '8ea39b15';

  constructor(private http: HttpClient) { }

  getMovies(searchField: string): Observable<IMovie[]>{
    return this.http.get<IMovieResponse>(`${this.API_URL}?s=${searchField}&apikey=${this.API_KEY}`).pipe(
      map((res: IMovieResponse)=> res.Search)
    )
  }

  // getMoviesById(id: string): Observable<IMovie>{
  //   return this.http.get<IMovieResponse>(`${this.API_URL}?i=${id}&apikey=${this.API_KEY}`).pipe(
  //     map((res: IMovieResponse)=> res.Search)
  //   )
  // }
}
