import {Movies} from './movies';
export class MovieList {
    id: number;
    title: String;
    movies: Movies[] = [];
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}
