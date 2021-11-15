import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClasse6Component } from './edit-classe6.component';

describe('EditClasse6Component', () => {
  let component: EditClasse6Component;
  let fixture: ComponentFixture<EditClasse6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditClasse6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClasse6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
