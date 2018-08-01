import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MovieListService } from '../service/movie-list.service';
import { first } from 'rxjs/operators';
import { Router} from '@angular/router';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: MovieListService) { }
  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      genre: ['', Validators.required],
      movie: ['', Validators.required]
    });
  }
  onSubmit() {
    this.userService.createList(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['']);
      });
  }
}
