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
    path: 'leagues/:id',
    title: 'matchday - Leagues',
    loadComponent: () => import('./components/league-manager/league-manager.component').then(c => c.LeagueManagerComponent),

  },
  {
    path: 'leagues/:id/calendar',
    title: 'matchday - Leagues',
    loadComponent: () => import('./components/league-manager/league-calendar/league-calendar.component').then(c => c.LeagueCalendarComponent),

  },
  {
    path: '**',
    title: 'something went wrong',
    loadComponent: () => import('./pages/error/error.component').then(c => c.ErrorComponent),

  },

];
