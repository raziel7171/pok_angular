import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-pokemon',
  templateUrl: './filter-pokemon.component.html',
  styleUrls: ['./filter-pokemon.component.scss'],
})
export class FilterPokemonComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private location: Location) {}

  form!: FormGroup;
  types = [
    { id: 0, name: 'Grass' },
    { id: 1, name: 'Fire' },
    { id: 2, name: 'Water' },
    { id: 3, name: 'Electric' },
  ];

  pokemon = [
    {
      name: 'bulbasaur',
      types: [1, 0],
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    },
    {
      name: 'charmander',
      types: [1],
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
    },
    {
      name: 'squirtle',
      types: [2],
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
    },
    {
      name: 'pikachu',
      types: [3],
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    },
  ];

  originalPokemon = this.pokemon;

  originalForm = {
    name: '',
    typesId: [Number],
  };

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.originalForm);
    this.form.valueChanges.subscribe((values) => {
      this.pokemon = this.originalPokemon;
      this.searchPokemon(values);
    });
  }

  searchPokemon(values: any) { 
    console.log(values.typesId !== 0)   

    if (values.typesId >= 0) {
      this.pokemon = this.pokemon.filter(
        (pokemon) => pokemon.types.indexOf(values.typesId) !== -1
      );
    }    

    if (values.name) {
      this.pokemon = this.pokemon.filter(
        (pokemon) => pokemon.name.indexOf(values.name) !== -1
      );
    }
    
  }

  private paramsURLSearch() {
    let queryStrings = [];
    let valueForm = this.form.value;

    if (valueForm.name) {
      queryStrings.push(`name=${valueForm.name}`);
    }

    if (valueForm.typesId != '0') {
      queryStrings.push(`typesId=${valueForm.typesId}`);
    }

    this.location.replaceState('pokemon/search', queryStrings.join('&'));
  }

  cleanSearch() {
    this.form.patchValue(this.originalForm);
    this.pokemon = this.originalPokemon;
  }
}
