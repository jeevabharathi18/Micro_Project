import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url = 'http://localhost:3005/movies'; // Your API endpoint

  constructor(private http: HttpClient) { }

  insertMovie(movie: Movie): string {
    this.http.post<Movie>(this.url, movie).subscribe();
    return 'Movie inserted!';
  }

  updateMovie(movie: Movie): string {
    this.http.put<Movie>(`${this.url}/${movie.id}`, movie).subscribe();
    return 'Movie updated!';
  }

  deleteMovie(movie: Movie): string {
    this.http.delete(`${this.url}/${movie.id}`).subscribe();
    return 'Movie deleted!';
  }

  findMovie(id: number) {
    return this.http.get<Movie>(`${this.url}/${id}`);
  }

  findAllMovies() {
    return this.http.get<Movie[]>(this.url);
  }
}
