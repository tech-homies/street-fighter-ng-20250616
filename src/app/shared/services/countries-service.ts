import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryDto } from './country-dto';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  #apiUrl = 'http://localhost:3000';
  readonly #http = inject(HttpClient);

  public getAll(): Observable<CountryDto[]> {
    return this.#http.get<CountryDto[]>(`${this.#apiUrl}/countries`);
  }
}
