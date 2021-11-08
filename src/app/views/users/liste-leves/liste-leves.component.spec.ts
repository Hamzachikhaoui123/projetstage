import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeLevesComponent } from './liste-leves.component';

describe('ListeLevesComponent', () => {
  let component: ListeLevesComponent;
  let fixture: ComponentFixture<ListeLevesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeLevesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeLevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
