import { TestBed } from '@angular/core/testing';

import { FindBlogByModeratoridService } from './find-blog-by-moderatorid.service';

describe('FindBlogByModeratoridService', () => {
  let service: FindBlogByModeratoridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindBlogByModeratoridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
