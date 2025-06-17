import { Component, inject, OnInit, signal } from '@angular/core';
import { CharactersService } from '../../shared/services/characters-service';
import { CharacterCard } from './character-card/character-card';
import { Character } from '../../shared/services/character';

@Component({
  selector: 'app-characters-page',
  imports: [CharacterCard],
  templateUrl: './characters-page.html',
  styleUrl: './characters-page.scss',
})
export default class CharactersPage implements OnInit {
  readonly #charactersService = inject(CharactersService);
  readonly characters = signal<Character[]>([]);

  ngOnInit(): void {
    this.#charactersService.getCharactersWithCountries().subscribe((characters) => {
      this.characters.set(characters);
    });
  }
}
