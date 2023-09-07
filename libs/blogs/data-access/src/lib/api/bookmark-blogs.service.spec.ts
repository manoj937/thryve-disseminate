import { TestBed } from '@angular/core/testing';

import { BookmarkBlogsService } from './bookmark-blogs.service';

describe('BookmarkBlogsService', () => {
  let service: BookmarkBlogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookmarkBlogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
