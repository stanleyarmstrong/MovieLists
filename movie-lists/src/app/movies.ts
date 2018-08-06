export class Movies {
    name: String;
    watched = false;
    constructor (values: Object = {}) {
        Object.assign(this, values);
    }
}
