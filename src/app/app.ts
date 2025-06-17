import { Component } from '@angular/core';
import { Nav } from './layout/nav/nav';

@Component({
  selector: 'app-root',
  imports: [Nav],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
