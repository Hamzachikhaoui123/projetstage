import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterClasse4Component } from './ajouter-classe4.component';

describe('AjouterClasse4Component', () => {
  let component: AjouterClasse4Component;
  let fixture: ComponentFixture<AjouterClasse4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterClasse4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterClasse4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
