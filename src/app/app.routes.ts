import {Routes} from '@angular/router';
import {LoginComponent} from "./pages/auth/login/login.component";
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {LogoutComponent} from './pages/auth/logout/logout.component';
import {isAuthGuard} from './guard/is.auth.guard';
import {isNotAuthGuard} from './guard/is.not.auth.guard';
import {UsersComponent} from './pages/users/users.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {UnauthorizedComponent} from './pages/layouts/unauthorized/unauthorized.component';
import {isAdmin} from './guard/is.admin.guard';
import {ClubsComponent} from "./pages/clubs/clubs.component";


export const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [isNotAuthGuard],
      },
      {
        path: 'logout',
        component: LogoutComponent,
        canActivate: [isAuthGuard],
      },
      {
        path: 'notfound',
        component: NotFoundComponent,
      },
      {
        path: 'unauthorized',
        component: UnauthorizedComponent,
      },

    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [isAuthGuard]
  },
  {
    path: 'admin',
    children: [
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'clubs',
        component: ClubsComponent
      }
    ],
    canActivate: [isAuthGuard, isAdmin]
  },
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
];
