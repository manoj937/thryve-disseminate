import { TestBed } from '@angular/core/testing';

import { QaByCommunityService } from './qa-by-community.service';

describe('QaByCommunityService', () => {
  let service: QaByCommunityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QaByCommunityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
