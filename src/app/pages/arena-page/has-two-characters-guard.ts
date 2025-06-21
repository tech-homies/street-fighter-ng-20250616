import { CanActivateFn, Router } from '@angular/router';
import { ArenaStore } from '../../shared/stores/arena-store';
import { inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationDialog } from '../../shared/dialogs/notification-dialog/notification-dialog';

export const hasTwoCharactersGuard: CanActivateFn = () => {
  const arenaStore = inject(ArenaStore);
  const router = inject(Router);
  const dialog = inject(MatDialog);

  if (arenaStore.arenaCharacters().length < 2) {
    dialog.open(NotificationDialog, {
      data: {
        title: 'Insufficient Characters',
        message: 'You need to select at least two characters for the arena.',
      },
    });
    return router.createUrlTree(['/characters']);
  }

  return true;
};
