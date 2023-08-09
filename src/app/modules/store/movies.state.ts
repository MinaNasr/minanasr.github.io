import { IMovie } from '../interfaces/movie';

export interface IMoviesState {
    movies: IMovie[];
}

export const initialMoviesState: IMoviesState = {
    movies: [] as IMovie[]
};
