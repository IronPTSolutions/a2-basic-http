import { Subject } from 'rxjs';
import { Joke } from './../models/joke.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavJokesService {
  private favJokes: Joke[] = [];

  constructor() { }

  addJoke(joke: Joke): void {
    if (!this.favJokes.map(j => j.id).includes(joke.id)) {
      this.favJokes.push(joke);
    }
  }

  getFavJokes(): Array<Joke> {
    return this.favJokes;
  }
}
