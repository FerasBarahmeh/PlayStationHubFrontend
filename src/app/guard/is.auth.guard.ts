import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';


export const isAuthGuard: CanActivateFn = (route, state): Observable<boolean> => {
  const _authService = inject(AuthService);
  const router = inject(Router);

  return _authService.isAuthentication().pipe(
    map((isAuthenticated: boolean) => {
      if (!isAuthenticated) {
        router.navigateByUrl('/auth/login')
          .then(r => console.log("Login! ", r));
        return false;
      }
      return true;
    }),
    catchError((error) => {
      router.navigateByUrl('/auth/login')
        .then(r => console.log("Login! ", r));
      return of(false);
    })
  );
};
