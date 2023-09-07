import { TestBed } from '@angular/core/testing';

import { FindCommunityByCommunityidService } from './find-community-by-communityid.service';

describe('FindCommunityByCommunityidService', () => {
  let service: FindCommunityByCommunityidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindCommunityByCommunityidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
