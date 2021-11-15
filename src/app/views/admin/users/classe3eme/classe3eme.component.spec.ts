import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Classe3emeComponent } from './classe3eme.component';

describe('Classe3emeComponent', () => {
  let component: Classe3emeComponent;
  let fixture: ComponentFixture<Classe3emeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Classe3emeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Classe3emeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
