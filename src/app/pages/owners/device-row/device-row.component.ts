import {Component, Input} from '@angular/core';
import {IDevice} from "../../../interfaces/devices/IDevice";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {NgClass} from "@angular/common";
import {faBookmark, faEllipsisV, faPlus} from "@fortawesome/free-solid-svg-icons";
import {RouterLink} from "@angular/router";
import { DeviceService } from '../../../services/shared-services/device.service';

@Component({
  selector: 'app-device-row',
  standalone: true,
  imports: [
    FaIconComponent,
    NgClass,
    RouterLink
  ],
  templateUrl: './device-row.component.html',
  styleUrl: './device-row.component.css'
})
export class DeviceRowComponent {
  @Input()
  device!: IDevice;
  @Input()
  isOdd: boolean = false;
  protected readonly faEllipsisV = faEllipsisV;
  protected readonly faBookmark = faBookmark;
  protected readonly faPlus = faPlus;

  constructor(private _deviceService: DeviceService) {
  }

  openModal(device: any) {
    this._deviceService.setDevice(device);
  }
}
