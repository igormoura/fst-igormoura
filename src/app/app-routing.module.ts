import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonsComponent } from './components/pokemons/pokemons.component';

const routes: Routes = [
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
  { path: 'pokemons', component: PokemonsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
