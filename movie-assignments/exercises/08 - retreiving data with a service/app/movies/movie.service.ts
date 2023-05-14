import { Injectable } from '@angular/core';
import { Movie } from './movie.interface';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // private movies: Movie[] =  [
  //       { id: 1, name: 'The Shawshank Redemption', genre: 'Drama', rating: 9.3 },
  //       { id: 2, name: 'The Godfather', genre: 'Crime', rating: 9.2 },
  //       { id: 3, name: 'Pulp Fiction', genre: 'Crime', rating: 8.9 },
  //       { id: 4, name: 'Fight Club', genre: 'Drama', rating: 8.8 },
  //     ];
  //
  // public getMovies(): Movie[] {
  //   return this.movies;
  // }
    private moviesUrl = 'api/movies';
    private moviesFavUrl = 'api/moviesFav';

    constructor(private http: HttpClient) {}

    public getMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(this.moviesUrl);
    }
}
