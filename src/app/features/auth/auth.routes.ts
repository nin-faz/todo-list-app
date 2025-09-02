import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    // TODO: Ajouter RegisterComponent dans la Partie 2
    redirectTo: '/todos',
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
