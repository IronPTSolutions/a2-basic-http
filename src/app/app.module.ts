import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JokesRandomComponent } from './components/jokes/jokes-random/jokes-random.component';
import { JokesListComponent } from './components/jokes/jokes-list/jokes-list.component';

import { HttpClientModule } from '@angular/common/http';
import { JokesCategoriesComponent } from './components/jokes/jokes-categories/jokes-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    JokesRandomComponent,
    JokesListComponent,
    JokesCategoriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
