import {Routes} from "@angular/router";
import {OwnerDashboardComponent} from "./owner-dashboard/owner-dashboard.component";
import {ClubComponent} from "./club/club.component";
import {DevicesComponent} from "./devices/devices.component";
import {ReservationsComponent} from "./reservations/reservations.component";

export const OWNER_ROUTER: Routes = [
  {
    path: 'dashboard', component: OwnerDashboardComponent,
  },
  {
    path: 'club/:id', loadComponent: ()=> ClubComponent
  },
  {
    path: 'devices/:clubId', loadComponent: () => DevicesComponent,
  },
  {
    path: 'reservations/:deviceId', loadComponent: () => ReservationsComponent,
  }
]
