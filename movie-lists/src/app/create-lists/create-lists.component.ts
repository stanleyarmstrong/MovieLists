import { Component,  } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router} from '@angular/router';
import { Movielists } from '../movielists';

@Component({
  selector: 'app-create-lists',
  templateUrl: './create-lists.component.html',
  styleUrls: ['./create-lists.component.css']
})
export class CreateListsComponent {
  constructor(private router: Router) {
  }
  id = 0;
  movielistForm = new FormGroup({
    listName : new FormControl(''),
    genreName : new FormControl(''),
    movieName: new FormControl(''),
  });
  onSubmit() {
    console.log('New movie list created');
    this.router.navigate(['/']);
  }
}
