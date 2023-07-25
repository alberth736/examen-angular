import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getUsers(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getPokemons(): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=25');
  }
}
