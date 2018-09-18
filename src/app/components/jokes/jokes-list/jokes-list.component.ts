import { FavJokesService } from './../../../shared/services/fav-jokes.service';
import { Joke } from './../../../shared/models/joke.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.css']
})
export class JokesListComponent {

  constructor(private favJokesService: FavJokesService) { }

}
