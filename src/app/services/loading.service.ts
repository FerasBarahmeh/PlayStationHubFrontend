import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {NgxSpinnerService} from "ngx-spinner";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject.asObservable();

  constructor(private _spinnerService: NgxSpinnerService) {
  }

  show() {
    this.isLoadingSubject.next(true);
    this._spinnerService.show(undefined, {
      type: 'line-scale',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      size: 'default',
      color: '#fff',
      fullScreen: false,
    }).then(r => {});
  }

  hide() {
    this.isLoadingSubject.next(false);
    setTimeout(() => {
      this._spinnerService.hide();
    }, 200);
  }
}
