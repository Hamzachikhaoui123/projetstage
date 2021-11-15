import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClasse4Component } from './edit-classe4.component';

describe('EditClasse4Component', () => {
  let component: EditClasse4Component;
  let fixture: ComponentFixture<EditClasse4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditClasse4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClasse4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
