import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

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
      .subscribe(pokemons => {
        this.pokemons = pokemons['results'];
        this.pokemonsDefault = Object.assign([], this.pokemons);
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
