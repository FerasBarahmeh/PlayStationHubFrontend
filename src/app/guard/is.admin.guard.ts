import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ICheckPrivilege } from '../interfaces/auth/ICheckPrivilege';


export const isAdmin: CanActivateFn = (route, state): Observable<boolean> => {
  const _authService = inject(AuthService);
  const router = inject(Router);

  return _authService.isAdmin().pipe(
    map((isAdmin: ICheckPrivilege) => {
      if (!isAdmin.response) {
        router.navigate(['/auth/unauthorized']);
        return false;
      }

      return true;
    }),
    catchError((error) => {
      console.log(error);

      if (error.status === 401) {
        router.navigate(['/auth/login']);
      }
      return of(false);
    })
  );
};
