import {Component, Input} from '@angular/core';
import {Movie} from '../movies/movie.interface';

@Component({
  selector: 'cw-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent {
  @Input() movie: Movie;
}
