import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterClasse2Component } from './ajouter-classe2.component';

describe('AjouterClasse2Component', () => {
  let component: AjouterClasse2Component;
  let fixture: ComponentFixture<AjouterClasse2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterClasse2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterClasse2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
