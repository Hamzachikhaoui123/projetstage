import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterClasse5Component } from './ajouter-classe5.component';

describe('AjouterClasse5Component', () => {
  let component: AjouterClasse5Component;
  let fixture: ComponentFixture<AjouterClasse5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterClasse5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterClasse5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
