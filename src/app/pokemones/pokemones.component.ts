import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';

interface Pokemon {
  name: string;
  image: string;
  description: string;
  type: string;
}

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.scss'],
})
export class PokemonesComponent implements OnInit {
  pokemons: Pokemon[] = [];
  displayedColumns: string[] = ['name', 'description', 'type', 'image'];
  dataSource = new MatTableDataSource<Pokemon>(this.pokemons);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.http
      .get<any>('https://pokeapi.co/api/v2/pokemon?limit=30')
      .pipe(map((data: any) => data.results.map((pokemon: any) => pokemon.url)))
      .subscribe(
        (pokemonUrls: string[]) => {
          const observables = pokemonUrls.map((url) => this.http.get<any>(url));
          forkJoin(observables).subscribe(
            (pokemonDataArray: any[]) => {
              for (const pokemonData of pokemonDataArray) {
                this.http.get<any>(pokemonData.species.url).subscribe(
                  (speciesData) => {
                    const englishEntry = speciesData.flavor_text_entries.find(
                      (entry: any) => entry.language.name === 'es'
                    );
                    const description = englishEntry?.flavor_text || '';

                    const types = pokemonData.types.map(
                      (type: any) => type.type.name
                    );

                    this.pokemons.push({
                      name: pokemonData.name,
                      image: pokemonData.sprites.front_default,
                      description: description,
                      type: types.join(', '),
                    });

                    // Comprobar si ya se han cargado todos los Pokémon
                    if (this.pokemons.length === pokemonDataArray.length) {
                      // Ordenar la lista de Pokémon por nombre antes de mostrarla
                      this.pokemons.sort((a, b) =>
                        a.name.localeCompare(b.name)
                      );
                    }
                  },
                  (error) =>
                    console.error(
                      'Error al obtener detalles del Pokémon',
                      error
                    )
                );
              }
            },
            (error) => console.error('Error al obtener lista de Pokémon', error)
          );
        },
        (error) => console.error('Error al obtener lista de Pokémon', error)
      );
  }
}
