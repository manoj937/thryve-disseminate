import { TestBed } from '@angular/core/testing';

import { MemberApproveCommunityService } from './member-approve-community.service';

describe('MemberApproveCommunityService', () => {
  let service: MemberApproveCommunityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberApproveCommunityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
