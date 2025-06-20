import { Injectable, signal } from '@angular/core';
import { CharacterDto } from '../services/character-dto';

@Injectable({ providedIn: 'root' })
export class ArenaStore {
  #arenaCharacters = signal<CharacterDto[]>([]);
  arenaCharacters = this.#arenaCharacters.asReadonly();

  toggleToArena(character: CharacterDto): void {
    const isInArena = this.#arenaCharacters().some((c) => c.id === character.id);
    if (isInArena) {
      this.#arenaCharacters.update((actualArena) => actualArena.filter((c) => c.id !== character.id));
      return;
    }
    if (this.#arenaCharacters().length >= 2) {
      return;
    }
    this.#arenaCharacters.update((actualArena) => actualArena.concat(character));
  }

  isInArena(character: CharacterDto) {
    return this.#arenaCharacters().some((c) => c.id === character.id);
  }
}
