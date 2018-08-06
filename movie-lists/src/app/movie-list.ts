export class MovieList {
    id: number;
    title: String;
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}
