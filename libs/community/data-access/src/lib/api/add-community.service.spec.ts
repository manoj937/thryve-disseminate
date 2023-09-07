import { TestBed } from '@angular/core/testing';

import { AddCommunityService } from './add-community.service';

describe('AddCommunityService', () => {
  let service: AddCommunityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddCommunityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
