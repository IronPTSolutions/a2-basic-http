import { Observable } from 'rxjs';
import { FavJokesService } from './../../../shared/services/fav-jokes.service';
import { Joke } from './../../../shared/models/joke.model';
import { JokesService } from './../../../shared/services/jokes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jokes-random',
  templateUrl: './jokes-random.component.html',
  styleUrls: ['./jokes-random.component.css']
})
export class JokesRandomComponent implements OnInit {
  joke: Joke;

  constructor(
    private jokesService: JokesService,
    private favJokesService: FavJokesService
  ) { }

  ngOnInit() {
    this.getRandomJoke();
  }

  onClickSave(joke: Joke): void {
    this.favJokesService.addJoke(joke);
  }

  onClickGetRandom(): void {
    this.getRandomJoke();
  }

  private getRandomJoke(): void {
    this.jokesService.getRandomJoke().subscribe((joke: Joke) => {
      this.joke = joke;
    });
  }

}
