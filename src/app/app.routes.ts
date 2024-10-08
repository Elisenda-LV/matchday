import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    title: 'matchday',
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),

  },
  {
    path: 'leagues',
    title: 'matchday - Leagues',
    loadComponent: () => import('./components/leagues/leagues.component').then(c => c.LeaguesComponent),

  },
  {
    path: '**',
    title: 'something went wrong',
    loadComponent: () => import('./pages/error/error.component').then(c => c.ErrorComponent),

  },

];
