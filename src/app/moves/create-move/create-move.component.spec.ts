import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMoveComponent } from './create-move.component';

describe('CreateMoveComponent', () => {
  let component: CreateMoveComponent;
  let fixture: ComponentFixture<CreateMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
