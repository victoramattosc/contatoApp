import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'ctt-ari',
    loadComponent: () => import('./ctt-ari/ctt-ari.page').then( m => m.CttAriPage)
  },
  {
    path: 'ctt-gabi',
    loadComponent: () => import('./ctt-gabi/ctt-gabi.page').then( m => m.CttGabiPage)
  },
  {
    path: 'ctt-marcela',
    loadComponent: () => import('./ctt-marcela/ctt-marcela.page').then( m => m.CttMarcelaPage)
  },
  {
    path: 'ctt-mari',
    loadComponent: () => import('./ctt-mari/ctt-mari.page').then( m => m.CttMariPage)
  },
  {
    path: 'ctt-vitao',
    loadComponent: () => import('./ctt-vitao/ctt-vitao.page').then( m => m.CttVitaoPage)
  },
];
