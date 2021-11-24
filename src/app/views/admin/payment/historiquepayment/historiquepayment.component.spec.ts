import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquepaymentComponent } from './historiquepayment.component';

describe('HistoriquepaymentComponent', () => {
  let component: HistoriquepaymentComponent;
  let fixture: ComponentFixture<HistoriquepaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriquepaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriquepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
