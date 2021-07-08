import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { moveCreationDTO } from "../move";
@Component({
  selector: 'app-form-move',
  templateUrl: './form-move.component.html',
  styleUrls: ['./form-move.component.scss'],
})
export class FormMoveComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {
  }
  
  form!: FormGroup;
  types = [
    { id: 0, name: 'Grass' },
    { id: 1, name: 'Fire' },
    { id: 2, name: 'Water' },
    { id: 3, name: 'Electric' },
  ];
  categories = [
    { id: 0, name: 'Physical', icon:'whatshot' },
    { id: 1, name: 'Special', icon:'sports_mma' },
    { id: 2, name: 'Status', icon:'insights' }
  ];

  @Input()
  modelMove!: moveCreationDTO;

  @Output()
  submit: EventEmitter<moveCreationDTO> = new EventEmitter<moveCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', { validators: [Validators.required] }],
      typeId: ['', [Validators.required] ],
      categoryId: ['',  [Validators.required] ],
      power: [Number, { validators: [Validators.max(255), Validators.min(0), Validators.required ], }],
      accuracy: [Number, { validators: [Validators.max(100), Validators.min(0), Validators.required]}]
    });

    // this.form.valueChanges.subscribe((values) => {   
    //   this.fiveMultiple()
    // });

    if(this.modelMove !== undefined){
      this.form.patchValue(this.modelMove)
    }
  }

  private fiveMultiple() {
    let valueForm = this.form.value;    
    let newValues: any = {};
    if(valueForm.power >= 0){
      newValues.power = Math.round(valueForm.power/5)*5
      console.log(newValues.power)
    }
    if(valueForm.accuracy >= 0){
      newValues.accuracy = Math.round(valueForm.accuracy/5)*5
      console.log(newValues.accuracy)
    }
    this.form.patchValue(newValues);
  }

  onSubmit(){
     this.submit.emit(this.form.value)
  }
}
