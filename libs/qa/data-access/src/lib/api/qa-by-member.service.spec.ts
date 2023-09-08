import { TestBed } from '@angular/core/testing';

import { QaByMemberService } from './qa-by-member.service';

describe('QaByMemberService', () => {
  let service: QaByMemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QaByMemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
