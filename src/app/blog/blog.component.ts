import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator'; // Importa PageEvent

interface Pokemon {
  name: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  pokemons: Pokemon[] = [];
  totalPokemons = 0; // Agrega la propiedad para el total de pokemones
  pageSize = 50; // Establece la cantidad de pokemones por página
  pageIndex = 0; // Establece la página actual del paginator

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getPokemons(); // Llama a la función para obtener los pokemones
  }

  getPokemons() {
    // Llamada a la PokeAPI para obtener los primeros 48 Pokémon (4 páginas de 12 pokemones cada una)
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=50').subscribe(
      (data) => {
        this.totalPokemons = data.count; // Obtiene el total de pokemones
        // Para cada resultado, hacemos otra petición para obtener más detalles del Pokémon
        for (const pokemon of data.results) {
          this.http.get<any>(pokemon.url).subscribe(
            (pokemonData) => {
              // Ahora obtenemos la descripción del Pokémon en inglés
              this.http.get<any>(pokemonData.species.url).subscribe(
                (speciesData) => {
                  const englishEntry = speciesData.flavor_text_entries.find(
                    (entry: any) => entry.language.name === 'es'
                  );
                  const description = englishEntry?.flavor_text || '';

                  this.pokemons.push({
                    name: pokemonData.name,
                    image: pokemonData.sprites.front_default,
                    description: description,
                  });
                },
                (error) =>
                  console.error('Error al obtener detalles del Pokémon', error)
              );
            },
            (error) =>
              console.error('Error al obtener detalles del Pokémon', error)
          );
        }
      },
      (error) => console.error('Error al obtener lista de Pokémon', error)
    );
  }

  // Función para manejar el cambio de página del paginator
  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.getPokemons(); // Vuelve a obtener los pokemones para la nueva página
  }
}
