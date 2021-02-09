import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexTypesComponent } from './index-types.component';

describe('IndexTypesComponent', () => {
  let component: IndexTypesComponent;
  let fixture: ComponentFixture<IndexTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
