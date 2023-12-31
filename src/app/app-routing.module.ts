import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './modules/components/movies/movies.component';
import { MovieDetailsComponent } from './modules/components/movie-details/movie-details.component';

const routes: Routes = [
  {path: '', component: MoviesComponent},
  {path: 'movie/:id', component: MovieDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
