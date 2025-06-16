import {Component, inject} from '@angular/core';
import {CharactersService} from '../../shared/services/characters-service';
import {CharacterDto} from '../../shared/services/character-dto';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-characters-page',
  imports: [
    AsyncPipe
  ],
  templateUrl: './characters-page.html',
  styleUrl: './characters-page.scss'
})
export class CharactersPage {
  readonly #charactersService = inject(CharactersService);

  characters$: Observable<CharacterDto[]> = this.#charactersService.getAll();

}
