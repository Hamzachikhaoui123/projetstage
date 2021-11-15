import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Classe1ereComponent } from './classe1ere.component';

describe('Classe1ereComponent', () => {
  let component: Classe1ereComponent;
  let fixture: ComponentFixture<Classe1ereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Classe1ereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Classe1ereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
