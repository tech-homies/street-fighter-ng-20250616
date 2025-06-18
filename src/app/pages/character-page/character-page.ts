import { Component, inject, input as routerParam } from '@angular/core';
import { CharactersService } from '../../shared/services/characters-service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';
import { switchMap } from 'rxjs';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-character-page',
  imports: [JsonPipe, RouterLink, MatButton],
  templateUrl: './character-page.html',
  styleUrl: './character-page.scss',
})
export default class CharacterPage {
  readonly charactersService = inject(CharactersService);
  protected readonly characterId = routerParam.required<string>();

  // En attendant que les "ressource()" ne soient plus en "experimental" (Angular 21 ?)
  public character = toSignal(toObservable(this.characterId).pipe(switchMap((id) => this.charactersService.get(id))));
}
