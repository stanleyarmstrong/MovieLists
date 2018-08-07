import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MovieListDataService } from './movie-list-data.service';
import { MovieList } from './movie-list';
import { Movies } from './movies';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MovieListDataService],
})
export class AppComponent {
  autocomplete: FormControl = new FormControl();
  newMovieList: MovieList = new MovieList();
  newMovie: Movies = new Movies();
  constructor(private movieListDataService: MovieListDataService) {}
  addMovieList() {
    this.movieListDataService.addMovieList(this.newMovieList);
    this.newMovieList = new MovieList();
  }
  removeMovieList(movieList) {
    this.movieListDataService.deleteMovieListById(movieList.id);
  }
  addMovie(movieList) {
    this.movieListDataService.addMovie(movieList.id, this.newMovie);
    this.newMovie = new Movies();
  }
  removeMovie(movieList, movie) {
    this.movieListDataService.deleteMovie(movieList.id, movie);
  }
  toggleWatched(movieList, movie) {
    this.movieListDataService.toggleWatched(movieList.id, movie);
  }
  get movieLists() {
    return this.movieListDataService.getAllMovieLists();
  }
}
