import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePaymentComponent } from './liste-payment.component';

describe('ListePaymentComponent', () => {
  let component: ListePaymentComponent;
  let fixture: ComponentFixture<ListePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
