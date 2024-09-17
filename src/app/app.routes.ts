import { Routes } from '@angular/router';
import {LoginComponent} from "./pages/auth/login/login.component";
import { AuthGuard  } from './guard/auth.guard';
import { DashboardComponent } from './pages/admins/dashboard/dashboard.component';



export const routes: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
      },
    ],
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
