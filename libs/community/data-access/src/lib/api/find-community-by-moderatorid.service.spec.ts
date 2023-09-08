import { TestBed } from '@angular/core/testing';

import { FindCommunityByModeratoridService } from './find-community-by-moderatorid.service';

describe('FindCommunityByModeratoridService', () => {
  let service: FindCommunityByModeratoridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindCommunityByModeratoridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
