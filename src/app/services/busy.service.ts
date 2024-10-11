import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {

  private _busyRequestCount = 0;

  constructor(private _spinnerService: NgxSpinnerService) { }


  busy() {
    this._busyRequestCount++;
    this._spinnerService;
    this._spinnerService.show(undefined, {
      type: 'line-scale',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      size: 'default',
      color: '#fff',
      fullScreen: false,
    });
  }

  idle() {
    setTimeout(() => {
      this._spinnerService.hide();
    }, 200);
  }
}
