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
      const isDashboardPage = state.url === '/dashboard';

      if (!isAuthenticated && isDashboardPage) {
        router.navigate(['/auth/login']);
        return false;
      }

      if (isAuthenticated && !isDashboardPage) {
        return true;
      }

      if (!isAuthenticated && !isDashboardPage) {
        router.navigate(['/auth/login']);
        return false;
      }


      return true;
    }),
    catchError((error) => {
      router.navigate(['/auth/login']);
      return of(false);
    })
  );
};
