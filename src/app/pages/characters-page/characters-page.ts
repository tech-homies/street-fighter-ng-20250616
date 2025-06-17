import { Component, computed, inject, OnInit, signal, effect, untracked } from '@angular/core';
import { CharactersService } from '../../shared/services/characters-service';
import { JsonPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { CharacterCard } from './character-card/character-card';
import { Character } from '../../shared/services/character';

@Component({
  selector: 'app-characters-page',
  imports: [MatIcon, CharacterCard],
  templateUrl: './characters-page.html',
  styleUrl: './characters-page.scss',
})
export class CharactersPage implements OnInit {
  readonly #charactersService = inject(CharactersService);
  public characters = signal<Character[]>([]);

  price = signal(20);
  priceTTC = computed(() => this.price() * 1.2);

  // effect = effect(() => alert(`Le nouveu prix est ${untracked(() => this.price())}`));

  ngOnInit(): void {
    this.#charactersService.getCharactersWithCountries().subscribe((characters) => {
      this.characters.set(characters);
    });
  }

  constructor() {
    console.log(this.price());
    console.log(this.priceTTC());

    this.price.set(10);
    console.log(this.price());
    console.log(this.priceTTC());
  }

  updatePrice() {
    this.price.update((p) => p + 1);
  }
}
