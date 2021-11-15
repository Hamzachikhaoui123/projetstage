import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedeclasseComponent } from './listedeclasse.component';

describe('ListedeclasseComponent', () => {
  let component: ListedeclasseComponent;
  let fixture: ComponentFixture<ListedeclasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListedeclasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListedeclasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
