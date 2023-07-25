import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemons(limit: number, offset: number) {
    const url = `${this.apiUrl}/pokemon?limit=${limit}&offset=${offset}`;
    return this.http.get<any>(url);
  }
}
