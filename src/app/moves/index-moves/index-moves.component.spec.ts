import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexMovesComponent } from './index-moves.component';

describe('IndexMovesComponent', () => {
  let component: IndexMovesComponent;
  let fixture: ComponentFixture<IndexMovesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexMovesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexMovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
