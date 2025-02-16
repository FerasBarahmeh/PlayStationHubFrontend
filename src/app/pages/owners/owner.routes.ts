import { Routes} from "@angular/router";
import { OwnerDashboardComponent } from "./owner-dashboard/owner-dashboard.component";
import {ClubComponent} from "./club/club.component";

export const OWNER_ROUTER: Routes = [
  {
    path: 'dashboard', component: OwnerDashboardComponent,
  },
  {
    path: 'club/:id', loadComponent: ()=> ClubComponent
  }
]
