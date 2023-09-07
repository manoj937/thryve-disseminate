import { TestBed } from '@angular/core/testing';

import { FindBlogByMemberidService } from './find-blog-by-memberid.service';

describe('FindBlogByMemberidService', () => {
  let service: FindBlogByMemberidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindBlogByMemberidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
