import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Classe5emeComponent } from './classe5eme.component';

describe('Classe5emeComponent', () => {
  let component: Classe5emeComponent;
  let fixture: ComponentFixture<Classe5emeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Classe5emeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Classe5emeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
