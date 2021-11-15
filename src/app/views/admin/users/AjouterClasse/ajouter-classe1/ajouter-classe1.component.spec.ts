import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterClasse1Component } from './ajouter-classe1.component';

describe('AjouterClasse1Component', () => {
  let component: AjouterClasse1Component;
  let fixture: ComponentFixture<AjouterClasse1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterClasse1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterClasse1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
