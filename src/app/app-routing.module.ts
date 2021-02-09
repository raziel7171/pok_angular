import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CreateMoveComponent } from './moves/create-move/create-move.component';
import { EditMoveComponent } from './moves/edit-move/edit-move.component';
import { IndexMovesComponent } from './moves/index-moves/index-moves.component';
import { CreatePokemonComponent } from './pokemon/create-pokemon/create-pokemon.component';
import { EditPokemonComponent } from './pokemon/edit-pokemon/edit-pokemon.component';
import { FilterPokemonComponent } from './pokemon/filter-pokemon/filter-pokemon.component';
import { CreateTypeComponent } from './types/create-type/create-type.component';
import { EditTypeComponent } from './types/edit-type/edit-type.component';
import { IndexTypesComponent } from './types/index-types/index-types.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'pokemon/create', component: CreatePokemonComponent},
  {path: 'pokemon/edit/:id', component: EditPokemonComponent},
  {path: 'pokemon/search', component: FilterPokemonComponent},
  {path: 'types',  component: IndexTypesComponent},
  {path: 'types/create',  component: CreateTypeComponent},
  {path: 'types/edit/:id',  component: EditTypeComponent},
  {path: 'moves',  component: IndexMovesComponent},
  {path: 'moves/create',  component: CreateMoveComponent},
  {path: 'moves/edit/:id',  component: EditMoveComponent},
  {path: '**',  redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
