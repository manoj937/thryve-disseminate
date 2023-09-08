import { TestBed } from '@angular/core/testing';

import { AddQaService } from './add-qa.service';

describe('AddQaService', () => {
  let service: AddQaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddQaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
