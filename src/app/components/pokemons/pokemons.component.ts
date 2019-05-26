import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.sass']
})
export class PokemonsComponent implements OnInit {

  pokemons: Pokemon[];
  pokemonsDefault: Pokemon[];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getPokemons()
      .subscribe(response => {
        this.pokemons = response;
        this.pokemonsDefault = Object.assign([], response);
      });
  }

  search(value: string): void {
    if(!value){
        this.pokemons = Object.assign([], this.pokemonsDefault);
    }
    this.pokemons = Object.assign([], this.pokemonsDefault).filter(
       item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    )
 }
}
