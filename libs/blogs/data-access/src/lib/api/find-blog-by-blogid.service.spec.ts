import { TestBed } from '@angular/core/testing';

import { FindBlogByBlogidService } from './find-blog-by-blogid.service';

describe('FindBlogByBlogidService', () => {
  let service: FindBlogByBlogidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindBlogByBlogidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
