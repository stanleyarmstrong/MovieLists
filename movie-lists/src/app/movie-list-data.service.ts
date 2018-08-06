import { Injectable } from '@angular/core';
import { MovieList } from './movie-list';
import { Movies } from './movies';

@Injectable({
  providedIn: 'root'
})
export class MovieListDataService {
  lastId = 0;
  movieLists: MovieList[] = [];

  constructor() { }
  addMovieList(movieList: MovieList): MovieListDataService {
    if (!movieList.id) {
      movieList.id = ++this.lastId;
    }
    this.movieLists.push(movieList);
    return this;
  }
  deleteMovieListById(id: number): MovieListDataService {
    this.movieLists = this.movieLists.filter(movieList => movieList.id !== id);
    return this;
  }
  updateMovieListById(id: number, values: Object = {}): MovieList {
    const movieList = this.getMovieListById(id);
    if (!movieList) {
      return null;
    }
    Object.assign(movieList, values);
    return movieList;
  }
  getAllMovieLists(): MovieList[] {
    return this.movieLists;
  }
  getMovieListById(id: number): MovieList {
    return this.movieLists
      .filter(movieList => movieList.id === id)
      .pop();
  }
  addMovie(id: number, movie: Movies): MovieList {
    const movieList = this.getMovieListById(id);
    movieList.movies.push(movie);
    console.log(movieList.movies);
    return movieList;
  }
  deleteMovie(id: number, name: Movies): MovieList {
    const movieList = this.getMovieListById(id);
    movieList.movies = movieList.movies.filter(movie => movie.name !== name.name);
    return movieList;
  }
  getAllMovies(id: number): Movies[] {
    const movieList = this.getMovieListById(id);
    return movieList.movies;
  }
  getMovieByName(id: number, name: Movies): Movies {
    const movieList = this.getMovieListById(id);
    return movieList.movies.filter(movie => movie.name === name.name).pop();
  }
  toggleWatched(id: number, name: Movies): Movies {
    const movie = this.getMovieByName(id, name);
    movie.watched = !movie.watched;
    return movie;
  }
}
