import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { hasTwoCharactersGuard } from './has-two-characters-guard';

describe('hasTwoCharactersGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => hasTwoCharactersGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
