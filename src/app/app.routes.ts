import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    // canActivate: [isAuthGuard, isNotAuthGuard],
  },
  // {
  //   path: 'club-details',
  //   component: ClubPage,
  //   // canActivate: [isAuthGuard, isNotAuthGuard],
  // },
  {
    path: 'auth',
    loadChildren: () => import('../app/pages/auth/auth.routes').then(r => r.AUTH_ROUTES)
  },
  {
    path: 'admin',
    loadChildren: () => import('../app/pages/admins/admin.routes').then(r => r.ADMIN_ROUTES)
  },
  {path: '', redirectTo: '/auth/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/auth/notfound', pathMatch: 'full'},
];
