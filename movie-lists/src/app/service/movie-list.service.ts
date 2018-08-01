import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movielists } from '../api/movielists';

@Injectable()
export class MovieListService {
  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:8080/list-portal/lists';
  getLists() {
    return this.http.get<Movielists[]>(this.baseUrl);
  }
  getListById(id: number) {
    return this.http.get<Movielists>(this.baseUrl);
  }
  createList(list: Movielists){
    return this.http.post(this.baseUrl, list);
  }
  updateList(list: Movielists) {
    return this.http.put(this.baseUrl + '/' + list.id, list);
  }
  deleteList(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
