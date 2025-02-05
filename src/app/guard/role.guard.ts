import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {catchError, map} from "rxjs/operators";
import {of} from "rxjs";


export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.authorizedUser()
    .pipe(
      map(response => {
        let privileges = response.response.privileges
          ? response.response.privileges.map((privilege: { name: string }) => privilege.name.toLowerCase())
          : [];

        let res = route.data['roles'].filter((role: string) => privileges.includes(role.toLowerCase()));

        console.log(res.length != privileges.length)
        if (res.length != privileges.length) {
          router.navigateByUrl('/auth/unauthorized')
            .then(r => console.log("Unauthorized"))
          return false;
        }
        return true;

      }),
      catchError((error) => {
        router.navigateByUrl('/auth/unauthorized')
          .then(r => console.log("Unauthorized"))
        return of(false);
      }),
    )
};
