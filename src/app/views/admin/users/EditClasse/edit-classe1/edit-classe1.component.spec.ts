import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClasse1Component } from './edit-classe1.component';

describe('EditClasse1Component', () => {
  let component: EditClasse1Component;
  let fixture: ComponentFixture<EditClasse1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditClasse1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClasse1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
