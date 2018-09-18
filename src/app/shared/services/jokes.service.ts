import { Joke } from './../models/joke.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  private baseUrl: string = 'https://api.chucknorris.io/jokes';

  constructor(private http: HttpClient) { }

  getRandomJoke(): Observable<Joke> {
    return this.http.get<Joke>(`${this.baseUrl}/random`);
  }

  getCaregories(): Observable<Array<string>> {
    return this.http.get<Array<string>>(`${this.baseUrl}/categories`);
  }

  getJokeByCategory(category: string): Observable<Joke> {
    const params: HttpParams = new HttpParams().set('category', category);

    return this.http.get<Joke>(`${this.baseUrl}/random`, { params: params });
  }
}
