import { MovieList } from './movie-list';

describe('MovieList', () => {
  it('should create an instance', () => {
    expect(new MovieList()).toBeTruthy();
  });
  it('should accept new values in the constructor', () => {
    const movieList = new MovieList({
      title: 'New Movies Out',
    });
    expect(movieList.title).toEqual('New Movies Out');
  });
});
