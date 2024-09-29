import { Routes } from '@angular/router';
import { LoginComponent } from "./pages/auth/login/login.component";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LogoutComponent } from './pages/auth/logout/logout.component';
import { isAuthGuard } from './guard/is.auth.guard';
import { isNotAuthGuard } from './guard/is.not.auth.guard';


export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [isAuthGuard]
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent,
        // canActivate: [isNotAuthGuard]
      },
      {
        path: 'logout',
        component: LogoutComponent,
        canActivate: [isAuthGuard]
      }
    ],
  },

  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
];
