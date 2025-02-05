import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from "@angular/core";
import {LoadingService} from "../services/loading.service";
import {finalize} from "rxjs";

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  setTimeout(() => loadingService.show(), 0);

  return next(req).pipe(
    finalize(() => {
      setTimeout(() => loadingService.hide(), 300);
    })
  );
};
