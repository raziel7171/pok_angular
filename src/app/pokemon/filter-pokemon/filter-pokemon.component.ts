import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter-pokemon',
  templateUrl: './filter-pokemon.component.html',
  styleUrls: ['./filter-pokemon.component.scss'],
})
export class FilterPokemonComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private location: Location, private activatedRoute: ActivatedRoute) {}

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
    typeId: [Number],
  };

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.originalForm);
    this.ReadParamsURLSearch();
    this.searchPokemon(this.form.value);
    this.form.valueChanges.subscribe((values) => {
      this.pokemon = this.originalPokemon;
      this.searchPokemon(values);
      this.WriteParamsURLSearch();           
    });
  }

  searchPokemon(values: any) { 

    if (values.typeId >= 0) {
      this.pokemon = this.pokemon.filter(
        (pokemon) => pokemon.types.indexOf(values.typeId) !== -1
      );
    }    

    if (values.name) {
      this.pokemon = this.pokemon.filter(
        (pokemon) => pokemon.name.indexOf(values.name) !== -1
      );
    }
    
  }

  private ReadParamsURLSearch (){
    this.activatedRoute.queryParams.subscribe((params) => {
      let search: any = {};
      if (params.name){
        search.name = params.name;
      }
      if(params.typeId){
        search.typeId = Number(params.typeId);
      }
      this.form.patchValue(search);
      
    })
    
  }

  private WriteParamsURLSearch() {
    let queryStrings = [];
    let valueForm = this.form.value;

    if (valueForm.name) {
      queryStrings.push(`name=${valueForm.name}`);
    }

    if (valueForm.typeId >= 0) {
      console.log(valueForm.typeId + " asd")
      queryStrings.push(`typeId=${valueForm.typeId}`);
    }

    this.location.replaceState('pokemon/search', queryStrings.join('&'));
  }

  cleanSearch() {
    this.form.patchValue(this.originalForm);
    this.pokemon = this.originalPokemon;
  }
}
