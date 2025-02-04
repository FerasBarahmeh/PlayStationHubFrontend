import { Routes} from "@angular/router";
import { OwnerDashboardComponent } from "./owner-dashboard/owner-dashboard.component";

export const OWNER_ROUTER: Routes = [
  {
    path: 'dashboard', component: OwnerDashboardComponent,
  }
]
