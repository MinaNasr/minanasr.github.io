import { Component, Input } from '@angular/core';
import { IMovie } from 'src/app/modules/interfaces/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() movie: IMovie;

  getImage() {
    return this.movie.Poster !== 'N/A'
      ? this.movie.Poster
      : 'https://via.placeholder.com/400';
  }
}
