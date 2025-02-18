import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private deviceSubject = new BehaviorSubject<any>(null);
  device$ = this.deviceSubject.asObservable();

  setDevice(device: any) {
    this.deviceSubject.next(device);
  }
}
