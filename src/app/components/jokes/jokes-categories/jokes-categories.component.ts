import { Joke } from './../../../shared/models/joke.model';
import { JokesService } from './../../../shared/services/jokes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jokes-categories',
  templateUrl: './jokes-categories.component.html',
  styleUrls: ['./jokes-categories.component.css']
})
export class JokesCategoriesComponent implements OnInit {
  categories: string[];
  joke: Joke;

  constructor(private jokesService: JokesService) { }

  ngOnInit() {
    this.jokesService.getCaregories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  onClickCategory(cat: string) {
    this.jokesService.getJokeByCategory(cat).subscribe((joke: Joke) => {
      this.joke = joke;
    });
  }

}
