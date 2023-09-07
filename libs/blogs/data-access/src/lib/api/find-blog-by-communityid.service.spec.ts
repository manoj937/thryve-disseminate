import { TestBed } from '@angular/core/testing';

import { FindBlogByCommunityidService } from './find-blog-by-communityid.service';

describe('FindBlogByCommunityidService', () => {
  let service: FindBlogByCommunityidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindBlogByCommunityidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
