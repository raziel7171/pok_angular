import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  @Input()
  pokemon: any[] = [];

  constructor() { }
  
  ngOnInit(): void {
  
  }
  remove(index:number): void{
    this.pokemon.splice(index, 1)
  }

}
