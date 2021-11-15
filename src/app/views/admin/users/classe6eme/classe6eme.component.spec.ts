import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Classe6emeComponent } from './classe6eme.component';

describe('Classe6emeComponent', () => {
  let component: Classe6emeComponent;
  let fixture: ComponentFixture<Classe6emeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Classe6emeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Classe6emeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
