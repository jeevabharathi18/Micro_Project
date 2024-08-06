// src/app/model/movie.ts

export class Movie {
    id: number;
    name: string;
    genre: string;
    rating: number;
  
    constructor(id: number = 0, name: string = '', genre: string = '', rating: number = 0) {
      this.id = id;
      this.name = name;
      this.genre = genre;
      this.rating = rating;
    }
  }
  