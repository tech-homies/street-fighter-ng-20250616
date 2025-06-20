import { CanActivateFn, Router } from '@angular/router';
import { ArenaStore } from '../../shared/stores/arena-store';
import { inject } from '@angular/core';

export const hasTwoCharactersGuard: CanActivateFn = () => {
  const arenaStore = inject(ArenaStore);
  const router = inject(Router);

  if (arenaStore.arenaCharacters().length < 2) {
    alert('You need to select at least two characters for the arena.');
    return router.createUrlTree(['/characters']);
  }

  return true;
};
