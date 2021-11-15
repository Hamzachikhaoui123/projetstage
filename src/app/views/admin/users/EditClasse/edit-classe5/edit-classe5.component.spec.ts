import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClasse5Component } from './edit-classe5.component';

describe('EditClasse5Component', () => {
  let component: EditClasse5Component;
  let fixture: ComponentFixture<EditClasse5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditClasse5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClasse5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
