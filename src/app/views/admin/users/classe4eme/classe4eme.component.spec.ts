import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Classe4emeComponent } from './classe4eme.component';

describe('Classe4emeComponent', () => {
  let component: Classe4emeComponent;
  let fixture: ComponentFixture<Classe4emeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Classe4emeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Classe4emeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
