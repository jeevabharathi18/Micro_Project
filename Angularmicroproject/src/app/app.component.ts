import { Component } from '@angular/core';
import { Movie } from './model/movie';
import { MovieService } from './movie.service'; // Ensure the correct import path

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title= 'ANGULARMICROPROJECT';
  movie: Movie;
  result: string;
  movieArr: Movie[] = [];
  flag: boolean = false;

  constructor(private movieService: MovieService) {
    this.movie = new Movie();
    this.result = "";
  }

  insertMovie(data: any) {
    this.movie.id = data.id;
    this.movie.name = data.name;
    this.movie.genre = data.genre;
    this.movie.rating = data.rating;
    this.result = this.movieService.insertMovie(this.movie);
  }

  updateMovie(data: any) {
    this.movie.id = data.id;
    this.movie.name = data.name;
    this.movie.genre = data.genre;
    this.movie.rating = data.rating;
    this.result = this.movieService.updateMovie(this.movie);
  }

  deleteMovie(data: any) {
    this.movie.id = data.id;
    this.result = this.movieService.deleteMovie(this.movie);
  }

  findMovie(data: any) {
    this.movieService.findMovie(data.id).subscribe(
      (movie: Movie) => {
        this.movie = movie;
        this.result = `${movie.id} ${movie.name} ${movie.genre} ${movie.rating}`;
        this.flag = false; // Hide the table if only finding one movie
      },
      (error) => {
        this.result = 'Movie not found!';
      }
    );
  }

  findAllMovies() {
    this.movieService.findAllMovies().subscribe(
      (movies: Movie[]) => {
        this.movieArr = movies;
        this.flag = true; // Show the table with all movies
      },
      (error) => {
        this.result = 'Error retrieving movies!';
      }
    );
  }
}
