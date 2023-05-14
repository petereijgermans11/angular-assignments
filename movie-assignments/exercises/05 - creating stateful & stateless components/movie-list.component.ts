import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Movie} from '../movies/movie.interface';

@Component({
  selector: 'cw-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  @Input() movies: Movie[];
  @Output() movieClicked: EventEmitter<Movie> = new EventEmitter<Movie>();

  onMovieClicked(movie: Movie): void {
    this.movieClicked.emit(movie);
  }
}
