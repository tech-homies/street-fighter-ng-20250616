import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FightsService {
  #apiUrl = environment.apiUrl;
  readonly #http = inject(HttpClient);

  public fight(characterOneId: string, characterTwoId: string): Observable<void> {
    return this.#http.post<void>(`${this.#apiUrl}/fights`, {
      characterOneId,
      characterTwoId,
    });
  }
}
