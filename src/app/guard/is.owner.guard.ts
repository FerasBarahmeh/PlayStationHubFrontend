import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {catchError, map} from "rxjs/operators";
import {ICheckPrivilege} from "../interfaces/auth/ICheckPrivilege";
import {Observable, of} from "rxjs";

export const isOwnerGuard: CanActivateFn = (route, state) :Observable<boolean> => {
  const _authService = inject(AuthService);
  const router = inject(Router);

  return _authService.isOwner().pipe(
    map((isOwner: ICheckPrivilege) => {
      if (!isOwner.response) {
        router.navigate(['/auth/unauthorized']);
        return false;
      }
      return true;
    }),
    catchError((error) => {
      if (error.status === 401) {
        router.navigate(['/auth/login']);
      }
      return of(false);
    })
  );
};
