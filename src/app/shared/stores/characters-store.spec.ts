import { TestBed } from '@angular/core/testing';

import { CharactersStore } from './characters-store';

describe('CharactersStore', () => {
  let service: CharactersStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
