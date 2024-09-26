import { Routes } from '@angular/router';
import { LoginComponent } from "./pages/auth/login/login.component";
import { DashboardComponent } from './pages/dashboard/dashboard.component';


export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },

  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
];
