import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryDto } from './country-dto';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  #apiUrl = environment.apiUrl;
  readonly #http = inject(HttpClient);

  public getAll(): Observable<CountryDto[]> {
    return this.#http.get<CountryDto[]>(`${this.#apiUrl}/countries`);
  }
}
