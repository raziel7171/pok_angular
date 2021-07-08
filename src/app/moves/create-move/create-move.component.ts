import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { moveCreationDTO } from '../move';

@Component({
  selector: 'app-create-move',
  templateUrl: './create-move.component.html',
  styleUrls: ['./create-move.component.scss']
})
export class CreateMoveComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  saveChanges(move: moveCreationDTO) {
    console.log(move.name.charAt(0).toUpperCase() + move.name.slice(1));
    console.log(move)
    
    this.router.navigate(['/moves']);
  }
}
