import { TestBed } from '@angular/core/testing';

import { ListeElevesService } from './liste-eleves.service';

describe('ListeElevesService', () => {
  let service: ListeElevesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeElevesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
