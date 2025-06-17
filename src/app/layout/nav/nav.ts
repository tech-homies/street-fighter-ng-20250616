import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconButton } from '@angular/material/button';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ArenaStore } from '../../shared/stores/arena-store.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

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

  protected arena = this.#arenaStore.arena;

  isHandset$: Observable<boolean> = this.#breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay(),
  );
}
