import { TestBed } from '@angular/core/testing';

import { Arena } from './arena';

describe('Arena', () => {
  let service: Arena;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Arena);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
