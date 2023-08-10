/// <reference lib="webworker" />

import { Observable, take } from "rxjs";
import { IMovie } from "../../interfaces/movie";

function sortAndGroupMoviesByYear(movies: IMovie[]) {
  const sortedMovies = movies?.sort((a, b) => Number(b.Year) -  Number(a.Year));
  const groupedMovies = new Map<string, IMovie[]>();

  sortedMovies?.forEach(movie => {
    const releaseYear = movie.Year;
    if (!groupedMovies.has(releaseYear)) {
      groupedMovies.set(releaseYear, []);
    }
    const moviesOfYear = groupedMovies.get(releaseYear);
    moviesOfYear!.push(movie);
  });

  return groupedMovies;
 
}

addEventListener('message', ({ data }) => {
  const response = {sortedAndGroupedMovies: sortAndGroupMoviesByYear(data)};
  console.log('response:', response)
  postMessage(response);
});
