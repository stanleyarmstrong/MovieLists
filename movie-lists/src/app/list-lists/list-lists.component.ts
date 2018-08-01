import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieListService } from '../service/movie-list.service';
import { Movielists } from '../api/movielists';

@Component({
  selector: 'app-list-lists',
  templateUrl: './list-lists.component.html',
  styleUrls: ['./list-lists.component.css']
})
export class ListListsComponent implements OnInit {
  users: Movielists[];
  constructor(private router: Router, private userService: MovieListService) { }

  ngOnInit() {
    this.userService.getLists()
      .subscribe( data => {
        this.users = data;
      });
  }
  deleteList(list: Movielists): void {
    this.userService.deleteUser(list.id)
      .subscribe( data => {
        this.users = this.users.filter(l => l !== list);
      });
  }
  editList(list: Movielists): void {
    localStorage.removeItem('editListsId');
    localStorage.setItem('editListsId', list.id.toString());
    this.router.navigate(['edit-lists']);
  }
  addList(): void {
    this.router.navigate(['add-list']);
  }
}
