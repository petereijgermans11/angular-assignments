import { Component } from '@angular/core';
import { Movie } from './movies/movie.interface';


@Component({
  selector: 'app-root',
  template: `
    <h1>List of Movies</h1>

    <cw-movie-list [movies]="movies" (movieClicked)="onMovieSelected($event)"></cw-movie-list>

    <cw-movie-detail [movie]="selectedMovie" *ngIf="selectedMovie"></cw-movie-detail>

  `,
})
export class AppComponent {
  public movies: Movie[] = [];
  public selectedMovie: Movie | null = null;

  constructor() {
    // Initialize the movies array with some movie objects
    this.movies = [
      { id: 1, name: 'The Shawshank Redemption', genre: 'Drama', rating: 9.3 },
      { id: 2, name: 'The Godfather', genre: 'Crime', rating: 9.2 },
      { id: 3, name: 'Pulp Fiction', genre: 'Crime', rating: 8.9 },
      { id: 4, name: 'Fight Club', genre: 'Drama', rating: 8.8 },
    ];
  }

  public onMovieSelected(movie: Movie): void {
    this.selectedMovie = movie;
  }

}
