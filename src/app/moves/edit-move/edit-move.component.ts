import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { moveCreationDTO } from '../move';

@Component({
  selector: 'app-edit-move',
  templateUrl: './edit-move.component.html',
  styleUrls: ['./edit-move.component.scss']
})
export class EditMoveComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  modelMove: moveCreationDTO = {name: 'Ice beam', typeId: 2, categoryId: 1, power: 100, accuracy: 95}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      //console.log(params.id)
    })
  }

  saveChanges(move: moveCreationDTO){
    console.log(move);
  }

}
