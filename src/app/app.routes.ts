import { Routes } from '@angular/router';
import { hasTwoCharactersGuard } from './pages/arena-page/has-two-characters-guard';

export const routes: Routes = [
  {
    path: 'characters',
    loadComponent: () => import('./pages/characters-page/characters-page'),
  },
  {
    path: 'character/:characterId',
    loadComponent: () => import('./pages/character-page/character-page'),
  },
  {
    path: 'arena',
    loadComponent: () => import('./pages/arena-page/arena-page'),
    canActivate: [hasTwoCharactersGuard],
  },
  {
    path: 'countries',
    loadComponent: () => import('./pages/characters-country-page/characters-country-page'),
  },
  { path: '**', redirectTo: 'characters' },
];
