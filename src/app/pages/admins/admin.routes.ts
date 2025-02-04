import {UsersComponent} from "./users/users.component";
import {ClubsComponent} from "./clubs/clubs.component";
import {ClubComponent} from "./club/club.component";
import {Routes} from "@angular/router";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {OverviewsComponent} from "../overviews/overviews.component";

export const ADMIN_ROUTES: Routes = [
  {
    path: 'dashboard', component: AdminDashboardComponent,
  },
  {
    path: 'users', component: UsersComponent
  },
  {
    path: 'clubs',
    loadComponent: () => ClubsComponent,
  },
  {
    path: 'clubs/:id',
    loadComponent: () => ClubComponent,
  },
  {
    path: 'clubs/overviews/:id',
    loadComponent: () => OverviewsComponent,
  },
  {
    path: 'clubs/overviews',
    loadComponent: () => OverviewsComponent,
  },
]
