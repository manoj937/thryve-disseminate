import { TestBed } from '@angular/core/testing';

import { QaBookmarksService } from './qa-bookmarks.service';

describe('QaBookmarksService', () => {
  let service: QaBookmarksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QaBookmarksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
