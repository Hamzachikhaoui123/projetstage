import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClasse3Component } from './edit-classe3.component';

describe('EditClasse3Component', () => {
  let component: EditClasse3Component;
  let fixture: ComponentFixture<EditClasse3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditClasse3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClasse3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
