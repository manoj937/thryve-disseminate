import { TestBed } from '@angular/core/testing';

import { DeleteQaService } from './delete-qa.service';

describe('DeleteQaService', () => {
  let service: DeleteQaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteQaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
