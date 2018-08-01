import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../api/user.model';
@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:8080/user-portal/users';
  getUsers() {
    return this.http.get<User[]>(this.baseUrl);
  }
  getUserById(id: Number) {
    return this.http.get<User>(this.baseUrl);
  }
  createUser(user: User) {
    return this.http.post(this.baseUrl, user);
  }
  updateUser(user: User) {
    return this.http.put(this.baseUrl + '/' + user.id, user);
  }
  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
