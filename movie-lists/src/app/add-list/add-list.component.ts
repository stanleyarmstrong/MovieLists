import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  create = false;
  constructor() { }

  ngOnInit() {
  }
  onCreate() {
    this.create = true;
  }

}
