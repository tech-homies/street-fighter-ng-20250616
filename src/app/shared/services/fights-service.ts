import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FightsService {
  #apiUrl = 'http://localhost:3000';
  readonly #http = inject(HttpClient);

  public fight(characterOneId: string, characterTwoId: string): Observable<void> {
    return this.#http.post<void>(`${this.#apiUrl}/fights`, {
      characterOneId,
      characterTwoId,
    });
  }
}
