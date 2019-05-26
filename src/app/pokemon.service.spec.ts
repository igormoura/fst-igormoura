import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PokemonService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [PokemonService]
  }));

  it('should be created', () => {
    const service: PokemonService = TestBed.get(PokemonService);
    expect(service).toBeTruthy();
  });

  it('#getValue should return real value', () => {
    const service: PokemonService = TestBed.get(PokemonService);
    expect(service.getPokemons()).not.toBeNull();
  });
});


