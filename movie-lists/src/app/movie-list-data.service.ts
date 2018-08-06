import { Injectable } from '@angular/core';
import { MovieList } from 'src/app/movie-list';

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
}
