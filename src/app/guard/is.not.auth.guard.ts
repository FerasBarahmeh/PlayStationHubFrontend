import { inject } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';



export const isNotAuthGuard: CanActivateFn = (route, state): Observable<boolean> => {
  const _AuthService = inject(AuthService);
  const router = inject(Router);

  return _AuthService.IsAuthontication().pipe(
    map((isAuthenticated: boolean) => {
      if (isAuthenticated) {
        // router.navigate(['/dashboard']);
        return false;
      } else {
        return true;
      }
    }),
    catchError(() => {
      router.navigate(['/auth/login']);
      return of(false);
    })
  );
};
