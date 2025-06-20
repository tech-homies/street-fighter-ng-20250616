import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { CharactersService } from '../../shared/services/characters-service';
import { CharacterDto } from '../../shared/services/character-dto';

@Component({
  selector: 'app-characters-country-page',
  imports: [],
  templateUrl: './characters-country-page.html',
  styleUrl: './characters-country-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CharactersCountryPage implements OnInit {
  readonly #charactersService = inject(CharactersService);

  characters = signal<CharacterDto[]>([]);

  ngOnInit(): void {
    this.#charactersService.getAllByCountry2('China').subscribe((characters) => {
      this.characters.set(characters);
    });
  }
}
