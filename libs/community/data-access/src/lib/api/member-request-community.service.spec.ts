import { TestBed } from '@angular/core/testing';

import { MemberRequestCommunityService } from './member-request-community.service';

describe('MemberRequestCommunityService', () => {
  let service: MemberRequestCommunityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberRequestCommunityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
