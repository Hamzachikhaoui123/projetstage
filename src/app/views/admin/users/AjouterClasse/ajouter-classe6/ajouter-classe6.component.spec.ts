import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterClasse6Component } from './ajouter-classe6.component';

describe('AjouterClasse6Component', () => {
  let component: AjouterClasse6Component;
  let fixture: ComponentFixture<AjouterClasse6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterClasse6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterClasse6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
