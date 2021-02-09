import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import {MatIconModule} from '@angular/material/icon';
import {MatIconRegistry} from '@angular/material/icon';
import { RatingComponent } from './utilities/rating/rating.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndexTypesComponent } from './types/index-types/index-types.component';
import { IndexMovesComponent } from './moves/index-moves/index-moves.component';
import { CreatePokemonComponent } from './pokemon/create-pokemon/create-pokemon.component';
import { CreateMoveComponent } from './moves/create-move/create-move.component';
import { CreateTypeComponent } from './types/create-type/create-type.component';
import { EditPokemonComponent } from './pokemon/edit-pokemon/edit-pokemon.component';
import { EditTypeComponent } from './types/edit-type/edit-type.component';
import { EditMoveComponent } from './moves/edit-move/edit-move.component';
import { FormTypeComponent } from './types/form-type/form-type.component';
import { FilterPokemonComponent } from './pokemon/filter-pokemon/filter-pokemon.component'; 
@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    GenericListComponent,
    MenuComponent,
    RatingComponent,
    LandingPageComponent,
    IndexTypesComponent,
    IndexMovesComponent,
    CreatePokemonComponent,
    CreateMoveComponent,
    CreateTypeComponent,
    EditPokemonComponent,
    EditTypeComponent,
    EditMoveComponent,
    FormTypeComponent,
    FilterPokemonComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatIconModule,
    ReactiveFormsModule    
  ],
  providers: [MatIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { }
