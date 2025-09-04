import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'todos',
    canActivate: [authGuard], // Protection par authentification
    loadChildren: () => import('./features/todos/todos.routes').then((m) => m.TODOS_ROUTES),
  },
  {
    path: 'admin',
    canActivate: [authGuard, adminGuard], // Protection par rôle admin
    loadChildren: () => import('./features/admin/admin.routes').then((m) => m.ADMIN_ROUTES),
  },
];
