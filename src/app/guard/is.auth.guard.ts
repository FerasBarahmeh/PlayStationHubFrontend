import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';



export const isAuthGuard: CanActivateFn = (route, state): Observable<boolean> => {
  const _authService = inject(AuthService);
  const router = inject(Router);

  return _authService.isAuthontication().pipe(
    map((isAuthenticated: boolean) => {
      if (!isAuthenticated && state.url !== '/auth/login') {
        router.navigate(['/auth/login']);
        return false;
      }
      return isAuthenticated;
    }),
    catchError((error) => {
      router.navigate(['/auth/login']);
      return of(false);
    })
  );
};
