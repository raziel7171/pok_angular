import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { onlyLetters } from 'src/app/utilities/validators/onlyLetters';
import { typeCreationDTO } from '../type';

@Component({
  selector: 'app-form-type',
  templateUrl: './form-type.component.html',
  styleUrls: ['./form-type.component.scss']
})
export class FormTypeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
    
  }

  form!: FormGroup;
  
  @Input()
  modelType!: typeCreationDTO;

  @Output()
  onSubmit: EventEmitter<typeCreationDTO> = new EventEmitter<typeCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators:[Validators.required, Validators.minLength(3), onlyLetters()]
      }],
      
    });
    if (this.modelType !== undefined){
        this.form.patchValue(this.modelType);
    }
  }

  saveChanges(){
    
    this.onSubmit.emit(this.form.value);
  }


  getFieldName(){
    var field = this.form.get('name');

    if (field?.hasError('onlyLetters')){
      return field.getError('onlyLetters').message;
    }
    if( field?.hasError('required')){
      return 'A name for the type is required'
    }
    else if(field?.hasError('minlength')){
      return 'At least 3 characters for the name is required'
    }
  
    return '';
  }

}
