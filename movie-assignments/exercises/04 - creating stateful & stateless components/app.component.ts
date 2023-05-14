import { Component } from '@angular/core';
import { Movie } from './movies/movie.interface';


@Component({
  selector: 'app-root',
  template: `
    <h1>List of Movies</h1>

    <ul>
      <li *ngFor="let movie of movies">
        {{ movie.name }} (Rating: {{ movie.rating }})
        <button (click)="onMovieClicked(movie)">View..</button>
      </li>
    </ul>

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

  public onMovieClicked(movie: Movie): void {
    this.selectedMovie = movie;
  }

}
