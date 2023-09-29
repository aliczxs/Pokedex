import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons: any[] = []; // Defina o tipo de dados apropriado, como um array de objetos

  constructor(private httpClient: HttpClient) {
    this.carregarPokemons();
  }

  async carregarPokemons() {
    try {
      const requisicao = await this.httpClient
        .get<any>('https://pokeapi.co/api/v2/pokemon?limit=30')
        .toPromise();

      if (requisicao && requisicao.results) {
        this.pokemons = requisicao.results;
      } else {
        console.error('Dados de Pokémon não encontrados na resposta da API.');
      }
    } catch (error) {
      console.error('Erro ao carregar os Pokémon:', error);
    }
  }
}

