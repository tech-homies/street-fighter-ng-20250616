import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { CharactersService } from '../../shared/services/characters-service';
import { CharacterCard } from './character-card/character-card';
import { Character } from '../../shared/services/character';
import { CharactersStore } from '../../shared/stores/characters-store';

@Component({
  selector: 'app-characters-page',
  imports: [CharacterCard],
  templateUrl: './characters-page.html',
  styleUrl: './characters-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CharactersPage implements OnInit {
  // readonly #charactersService = inject(CharactersService);
  readonly #charactersStore = inject(CharactersStore);
  readonly characters = this.#charactersStore.characters;

  ngOnInit(): void {
    this.#charactersStore.loadCharacters();
    // this.#charactersService.getCharactersWithCountries().subscribe((characters) => {
    //   this.characters.set(characters);
    // });
  }
}
