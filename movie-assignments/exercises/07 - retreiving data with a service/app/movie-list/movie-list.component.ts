import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from '../movies/movie.interface';
import {MovieService} from '../movies/movie.service';

@Component({
  selector: 'cw-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  public movies: Movie[];
  @Output() movieClicked: EventEmitter<Movie> = new EventEmitter<Movie>();

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
  }

  onMovieClicked(movie: Movie): void {
    this.movieClicked.emit(movie);
  }
}
