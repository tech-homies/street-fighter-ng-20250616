import { Injectable, signal } from '@angular/core';
import { CharacterDto } from '../services/character-dto';

@Injectable({ providedIn: 'root' })
export class ArenaStore {
  #arena = signal<CharacterDto[]>([]);
  arena = this.#arena.asReadonly();

  toggleToArena(character: CharacterDto): void {
    const isInArena = this.#arena().some((c) => c.id === character.id);
    if (isInArena) {
      this.#arena.update((actualArena) => actualArena.filter((c) => c.id !== character.id));
      return;
    }
    if (this.#arena().length >= 2) {
      return;
    }
    this.#arena.update((actualArena) => actualArena.concat(character));
  }

  isInArena(character: CharacterDto) {
    return this.#arena().some((c) => c.id === character.id);
  }
}
