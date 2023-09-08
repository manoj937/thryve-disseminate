import { TestBed } from '@angular/core/testing';

import { ApproveBlogService } from './approve-blog.service';

describe('ApproveBlogService', () => {
  let service: ApproveBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApproveBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
