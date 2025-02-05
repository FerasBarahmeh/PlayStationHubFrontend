import {CanActivateFn} from '@angular/router';
import {inject, PLATFORM_ID} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {Observable, of, tap} from "rxjs";
import {isPlatformBrowser, Location} from '@angular/common';
import {catchError, map} from "rxjs/operators";

export const unAuthGuard: CanActivateFn = (route, state): Observable<boolean> => {
  const _authService = inject(AuthService);
  const location = inject(Location);
  const platformId = inject(PLATFORM_ID);

  return _authService.isAuthentication().pipe(
    tap((isAuthenticated: boolean) => {
      if (isAuthenticated && isPlatformBrowser(platformId)) {
        location.back();
      }
    }),
    map((isAuthenticated: boolean) => !isAuthenticated),
  );
};
