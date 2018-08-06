import { TestBed, inject } from '@angular/core/testing';

import { MovieListDataService } from './movie-list-data.service';
import { MovieList } from 'src/app/movie-list';

describe('MovieListDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieListDataService]
    });
  });

  it('should be created', inject([MovieListDataService], (service: MovieListDataService) => {
    expect(service).toBeTruthy();
  }));
  describe('#getAllTodos()', () => {
    it('should return an array by default',
    inject([MovieListDataService], (service: (MovieListDataService)) => {
      expect(service.getAllMovieLists()).toEqual([]);
    }));
    it('should return all lists', inject([MovieListDataService],
       (service: MovieListDataService) => {
        const list1 = new MovieList({title: 'List 1'});
        const list2 = new MovieList({title: 'List 2'});
        service.addMovieList(list1);
        service.addMovieList(list2);
        expect(service.getAllMovieLists()).toEqual([list1, list2]);
       }));
  });
  describe('#save(movieList)', () => {

    it('should automatically assign an incrementing id', inject([MovieListDataService], (service: MovieListDataService) => {
      const list1 = new MovieList({title: 'Hello 1'});
      const list2 = new MovieList({title: 'Hello 2'});
      service.addMovieList(list1);
      service.addMovieList(list2);
      expect(service.getMovieListById(1)).toEqual(list1);
      expect(service.getMovieListById(2)).toEqual(list2);
    }));

  });

  describe('#deleteMovieListById(id)', () => {

    it('should remove todo with the corresponding id', inject([MovieListDataService], (service: MovieListDataService) => {
      const list1 = new MovieList({title: 'Hello 1'});
      const list2 = new MovieList({title: 'Hello 2'});
      service.addMovieList(list1);
      service.addMovieList(list2);
      expect(service.getAllMovieLists()).toEqual([list1, list2]);
      service.deleteMovieListById(1);
      expect(service.getAllMovieLists()).toEqual([list2]);
      service.deleteMovieListById(2);
      expect(service.getAllMovieLists()).toEqual([]);
    }));

    it('should not removing anything if MovieList with corresponding id is not found',
    inject([MovieListDataService], (service: MovieListDataService) => {
      const list1 = new MovieList({title: 'Hello 1'});
      const list2 = new MovieList({title: 'Hello 2'});
      service.addMovieList(list1);
      service.addMovieList(list2);
      expect(service.getAllMovieLists()).toEqual([list1, list2]);
      service.deleteMovieListById(3);
      expect(service.getAllMovieLists()).toEqual([list1, list2]);
    }));

  });

  describe('#updateMovieListById(id, values)', () => {

    it('should return todo with the corresponding id and updated data', inject([MovieListDataService], (service: MovieListDataService) => {
      const list1 = new MovieList({title: 'Hello 1'});
      service.addMovieList(list1);
      const updatedMovieList = service.updateMovieListById(1, {
        title: 'new title'
      });
      expect(updatedMovieList.title).toEqual('new title');
    }));

    it('should return null if todo is not found', inject([MovieListDataService], (service: MovieListDataService) => {
      const list = new MovieList({title: 'Hello 1'});
      service.addMovieList(list);
      const updatedMovieList = service.updateMovieListById(2, {
        title: 'new title'
      });
      expect(updatedMovieList).toEqual(null);
    }));


  });
});
