import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterDto } from './character-dto';
import { catchError, concatAll, filter, forkJoin, map, Observable, throwError, toArray } from 'rxjs';
import { CountriesService } from './countries-service';
import { Character } from './character';
import { CreateCharacterDto } from './create-character-dto';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CharactersService {
  #apiUrl = environment.apiUrl;
  readonly #http = inject(HttpClient);
  readonly #countriesService = inject(CountriesService);

  public getAll(): Observable<CharacterDto[]> {
    return this.#http.get<CharacterDto[]>(`${this.#apiUrl}/characters`);
  }

  public create(character: CreateCharacterDto): Observable<CharacterDto> {
    return this.#http.post<CharacterDto>(`${this.#apiUrl}/characters`, character);
  }

  public getAllWithDoubleStun(): Observable<CharacterDto[]> {
    return this.#http
      .get<CharacterDto[]>(`${this.#apiUrl}/characters`)
      .pipe(map((characters) => characters.map((c) => ({ ...c, stun: c.stun * 2 }))));
  }

  public getAllByCountry(country: string): Observable<CharacterDto[]> {
    return this.getAll().pipe(
      map((characters) => {
        return characters.filter((c) => c.country === country);
      }),
    );
  }

  public getAllByCountry2(country: string): Observable<CharacterDto[]> {
    return this.getAll().pipe(
      concatAll(),
      filter((character) => character.country === country),
      toArray(),
    );
  }

  public getCharactersWithCountries(): Observable<Character[]> {
    return forkJoin([this.getAll(), this.#countriesService.getAll()]).pipe(
      map(([characters, countries]) => {
        return characters.map((character) => {
          return {
            ...character,
            countryDetails: countries.find((c) => c.name === character.country)!,
          };
        });
      }),
    );
  }

  public get(id: string): Observable<CharacterDto> {
    return this.#http.get<CharacterDto>(`${this.#apiUrl}/characters/${id}`).pipe(
      catchError((err) => {
        return throwError(() => err);
      }),
    );
  }

  public getPictureUrl(character: CharacterDto): string {
    return `${this.#apiUrl}/assets/characters/${character.id}_thumbnail.png`;
  }
}
