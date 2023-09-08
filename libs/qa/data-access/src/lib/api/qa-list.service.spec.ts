import { TestBed } from '@angular/core/testing';

import { QaListService } from './qa-list.service';

describe('QaListService', () => {
  let service: QaListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QaListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
