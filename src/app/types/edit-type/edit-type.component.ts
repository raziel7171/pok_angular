import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { typeCreationDTO } from '../type';

@Component({
  selector: 'app-edit-type',
  templateUrl: './edit-type.component.html',
  styleUrls: ['./edit-type.component.scss']
})
export class EditTypeComponent implements OnInit {

  constructor(private router: Router) { }

  modelType: typeCreationDTO = {name: 'Grass'};

  ngOnInit(): void {
  }
  saveChanges(type: typeCreationDTO) {
    console.log(type.name.charAt(0).toUpperCase() + type.name.slice(1));
    
    this.router.navigate(['/types']);
  }
}
