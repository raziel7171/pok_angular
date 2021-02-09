import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon'; 

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
      matIconRegistry.addSvgIcon('pokeball', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/pokeball.svg'));
  }
  ngOnInit(): void{
    this.InitialPokemon = [{
      name: "Bulbasaur", height: 30, level: 6, image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
    }, {
      name: "Charmander", height: 60, level: 5, image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
    },
    {
      name: "Squirtle", height: 50, level: 6, image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'
    },
    {
      name: "Pikachu", height: 40, level: 5, image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
    }]
  }
  
  
  title = 'Main';

  InitialPokemon: any[] = [];
  PokemonTeam=[
    {
      name: "Tyranitar", height: 300, level: 80, image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/248.png'
    }, {
      name: "Golisopod", height: 160, level: 80, image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/768.png'
    },
    {
      name: "Torterra", height: 200, level: 80, image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/389.png'
    },
    {
      name: "Luxray", height: 120, level: 80, image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/405.png'
    },
    {
      name: "Chandelure", height: 100, level: 80, image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/609.png'
    },
    {
      name: "Corviknight", height: 220, level: 80, image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/823.png'
    }
  ]

  RateHandler(rate: number): void {
    console.log(rate)
  }
}
