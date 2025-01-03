import {Routes} from '@angular/router';
import {LoginComponent} from "./pages/auth/login/login.component";
import {LogoutComponent} from './pages/auth/logout/logout.component';
import {UsersComponent} from './pages/admins/users/users.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {UnauthorizedComponent} from './pages/layouts/unauthorized/unauthorized.component';
import {ClubsComponent} from "./pages/admins/clubs/clubs.component";
import {ClubComponent} from "./pages/admins/club/club.component";
import {HomeComponent} from "./pages/home/home.component";
import {ClubComponent as ClubPage} from "./pages/users/club/club.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {OverviewsComponent} from "./pages/overviews/overviews.component";

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    // canActivate: [isAuthGuard, isNotAuthGuard],
  },
  {
    path: 'club-details',
    component: ClubPage,
    // canActivate: [isAuthGuard, isNotAuthGuard],
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent,
        // canActivate: [isNotAuthGuard],
      },
      {
        path: 'logout',
        component: LogoutComponent,
        // canActivate: [isAuthGuard],
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
    // canActivate: [isAuthGuard]
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
        component: ClubsComponent,
      },
      {
        path: 'clubs/club',
        component: ClubComponent,
      }
    ],
    // canActivate: [isAuthGuard, isAdmin]
  },
  {
    path: 'clubs/overviews/:id',
    component: OverviewsComponent,
  },
  {
    path: 'clubs/overviews',
    component: OverviewsComponent,
  },
  {path: '', redirectTo: '/auth/login', pathMatch: 'full'},
];
