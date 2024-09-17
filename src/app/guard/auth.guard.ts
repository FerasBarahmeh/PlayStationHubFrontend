import {  inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


export const AuthGuard: CanActivateFn = (route, state): Observable<boolean> => {
  const _AuthService = inject(AuthService);
  const router = inject(Router);

  return _AuthService.IsAuthontication().pipe(
    map((isAuthenticated: boolean) => {
      if (!isAuthenticated) {
        router.navigate(['/auth/login']);
        return false;
      }
      return true;
    }),
    catchError(() => {
      router.navigate(['/auth/login']);
      return of(false);
    })
  );
};
