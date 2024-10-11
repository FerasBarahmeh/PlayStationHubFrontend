import { inject } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
export const isNotAuthGuard: CanActivateFn = (route, state): Observable<boolean> => {
  const _authService = inject(AuthService);
  const router = inject(Router);

  return _authService.isAuthontication().pipe(
    map((isAuthenticated: boolean) => {
      const isLoginPage = state.url === '/auth/login';

      if (isAuthenticated && isLoginPage) {
        router.navigate(['/dashboard']);
        return false;
      }

      if (isAuthenticated && !isLoginPage) {
        return true;
      }

      if (!isAuthenticated && !isLoginPage) {
        router.navigate(['/auth/login']);
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
