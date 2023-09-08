import { TestBed } from '@angular/core/testing';

import { SearchQaService } from './search-qa.service';

describe('SearchQaService', () => {
  let service: SearchQaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchQaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
