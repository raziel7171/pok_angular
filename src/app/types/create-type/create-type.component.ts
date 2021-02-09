import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { onlyLetters } from 'src/app/utilities/validators/onlyLetters';
import { typeCreationDTO } from '../type';

@Component({
  selector: 'app-create-type',
  templateUrl: './create-type.component.html',
  styleUrls: ['./create-type.component.scss'],
})
export class CreateTypeComponent {
  constructor(private router: Router) {}

  saveChanges(type: typeCreationDTO) {
    console.log(type.name.charAt(0).toUpperCase() + type.name.slice(1));
    
    this.router.navigate(['/types']);
  }
}
