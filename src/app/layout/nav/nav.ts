import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconButton } from '@angular/material/button';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { filter, mergeMap, Observable, tap } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ArenaStore } from '../../shared/stores/arena-store';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddCharacterDialog } from '../../shared/dialogs/add-character-dialog/add-character-dialog';
import { CharactersService } from '../../shared/services/characters-service';
import { CreateCharacterDto } from '../../shared/services/create-character-dto';
import { CharacterDto } from '../../shared/services/character-dto';
import { CharactersStore } from '../../shared/stores/characters-store';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
  imports: [
    AsyncPipe,
    MatSidenavContainer,
    MatSidenavContent,
    MatSidenav,
    MatToolbar,
    MatNavList,
    MatListItem,
    MatIcon,
    MatIconButton,
    RouterLink,
    RouterLinkActive,
  ],
})
export class Nav {
  readonly #breakpointObserver = inject(BreakpointObserver);
  readonly #arenaStore = inject(ArenaStore);
  readonly #charactersStore = inject(CharactersStore);
  readonly #dialog = inject(MatDialog);
  readonly #charactersService = inject(CharactersService);

  protected arena = this.#arenaStore.arena;

  isHandset$: Observable<boolean> = this.#breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay(),
  );

  openAddCharacterDialog() {
    this.#dialog
      .open(AddCharacterDialog)
      .afterClosed()
      .pipe(
        filter((data) => !!data),
        mergeMap((characterToCreate: CreateCharacterDto) => this.#charactersService.create(characterToCreate)),
      )
      .subscribe(() => {
        this.#charactersStore.loadCharacters();
      });
  }
}
