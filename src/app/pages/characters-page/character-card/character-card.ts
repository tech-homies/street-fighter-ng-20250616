import { Component, input, output } from '@angular/core';
import { Character } from '../../../shared/services/character';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-character-card',
  imports: [JsonPipe],
  templateUrl: './character-card.html',
  styleUrl: './character-card.scss',
})
export class CharacterCard {
  readonly character = input.required<Character>();
  readonly staminaReduced = output<number>();
}
