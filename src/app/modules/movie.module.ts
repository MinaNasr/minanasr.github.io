import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { moviesReducer } from './store/movies.reducer';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { EffectsModule } from '@ngrx/effects';
import { moviesEffects } from './store/movies.effects';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    MoviesComponent,
    MovieCardComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forFeature('movies', moviesReducer),
    EffectsModule.forFeature([moviesEffects])
  ]
})
export class MovieModule { }
