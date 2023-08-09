export interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface IMovieResponse {
    Search: IMovie[];
    totalResults: string;
    Response: string;
}

export interface searchParams {
    movie: string;
    series: string;
    episode: string;
}
