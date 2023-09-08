import { TestBed } from '@angular/core/testing';

import { SearchBlogService } from './search-blog.service';

describe('SearchBlogService', () => {
  let service: SearchBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
