import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMoveComponent } from './form-move.component';

describe('FormMoveComponent', () => {
  let component: FormMoveComponent;
  let fixture: ComponentFixture<FormMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
