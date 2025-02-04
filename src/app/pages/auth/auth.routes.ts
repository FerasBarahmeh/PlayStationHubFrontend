import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import {NotFoundComponent} from "../layouts/not-found/not-found.component";
import {UnauthorizedComponent} from "../layouts/unauthorized/unauthorized.component";
import {isAuthGuard} from "../../guard/is.auth.guard";

export const AUTH_ROUTES: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [isAuthGuard],},
  {path: 'notfound', component: NotFoundComponent},
  {path: 'unauthorized', component: UnauthorizedComponent},
]
