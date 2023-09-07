import { TestBed } from '@angular/core/testing';

import { FindCommunityByMemberidService } from './find-community-by-memberid.service';

describe('FindCommunityByMemberidService', () => {
  let service: FindCommunityByMemberidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindCommunityByMemberidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
