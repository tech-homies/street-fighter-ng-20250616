import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CharacterDto} from './character-dto';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  #apiUrl = 'http://localhost:3000';
  readonly #http = inject(HttpClient);

  public getAll(): Observable<CharacterDto[]> {
    return this.#http.get<CharacterDto[]>(`${this.#apiUrl}/characters`);
  }

}
