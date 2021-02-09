import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMoveComponent } from './edit-move.component';

describe('EditMoveComponent', () => {
  let component: EditMoveComponent;
  let fixture: ComponentFixture<EditMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
