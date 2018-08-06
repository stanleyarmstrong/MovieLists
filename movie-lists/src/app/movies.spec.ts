import { Movies } from './movies';

describe('Movies', () => {
  it('should create an instance', () => {
    expect(new Movies()).toBeTruthy();
  });
  it('should accept values in the constructor', () => {
    const movie = new Movies({
      name: 'hello',
      watched: true
    });
    expect(movie.name).toEqual('hello');
    expect(movie.watched).toEqual(true);
  });
});
