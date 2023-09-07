import { TestBed } from '@angular/core/testing';

import { DeleteCommunityService } from './delete-community.service';

describe('DeleteCommunityService', () => {
  let service: DeleteCommunityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteCommunityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
