import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/app/modules/interfaces/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: IMovie;

  constructor() { }

  ngOnInit(): void {
  }

  getImage() {
    return this.movie.Poster !== 'N/A' ? this.movie.Poster : 'https://via.placeholder.com/400';
    // if(this.movie.Poster == 'N/A') {
    //     return 'https://via.placeholder.com/600';
    // } else {
    //   return this.movie.Poster;
    // }
  }

}
