import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {roleGuard} from "./guard/role.guard";

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('../app/pages/auth/auth.routes').then(r => r.AUTH_ROUTES),
  },
  {
    path: 'admin',
    loadChildren: () => import('../app/pages/admins/admin.routes').then(r => r.ADMIN_ROUTES),
    canActivate: [roleGuard],
    data: {roles: ['user', 'admin']}
  },
  {
    path: 'owner',
    loadChildren: () => import('../app/pages/owners/owner.routes').then(r => r.OWNER_ROUTER),
    canActivate: [roleGuard],
    data: {roles: ['user', 'owner']}
  },
  {path: '', redirectTo: '/auth/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/auth/notfound', pathMatch: 'full'},
];
