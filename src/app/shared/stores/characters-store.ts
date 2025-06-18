import { inject, Injectable, signal } from '@angular/core';
import { CharacterDto } from '../services/character-dto';
import { CharactersService } from '../services/characters-service';

@Injectable({
  providedIn: 'root',
})
export class CharactersStore {
  #characters = signal<CharacterDto[]>([]);
  characters = this.#characters.asReadonly();
  #charactersService = inject(CharactersService);

  loadCharacters(): void {
    this.#charactersService.getCharactersWithCountries().subscribe((characters) => {
      this.#characters.set(characters);
    });
  }
}
