import {Component} from '@angular/core';
import {CharactersPage} from './pages/characters-page/characters-page';

@Component({
  selector: 'app-root',
  imports: [CharactersPage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
