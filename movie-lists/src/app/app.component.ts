import { Component } from '@angular/core';
import { MovieListDataService } from './movie-list-data.service';
import { MovieList } from './movie-list';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MovieListDataService],
})
export class AppComponent {
  newMovieList: MovieList = new MovieList();
  constructor(private movieListDataService: MovieListDataService) {}
  addMovieList() {
    this.movieListDataService.addMovieList(this.newMovieList);
    this.newMovieList = new MovieList();
  }
  removeMovieList(movieList) {
    this.movieListDataService.deleteMovieListById(movieList.id);
  }
  get movieLists() {
    return this.movieListDataService.getAllMovieLists();
  }
}
