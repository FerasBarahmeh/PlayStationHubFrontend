import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {IDevice} from "../../../interfaces/devices/IDevice";
import {getValidationClasses} from "../../../Utilities/validators/validation.utils";
import {numericValidator} from "../../../Utilities/validators/numeric-validator.utils";
import {NgClass} from "@angular/common";
import {ValidationMessageComponent} from "../../../components/validation-message/validation-message.component";
import {formatDate} from "../../../Utilities/format-date";
import {timeValidator} from "../../../Utilities/validators/time-validator";
import {upToDayDate} from "../../../Utilities/validators/upToDayDate";
import {DeviceService} from "../../../services/shared-services/device.service";

@Component({
  selector: 'app-insert-reservation',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass,
    ValidationMessageComponent
  ],
  templateUrl: './insert-reservation.component.html',
  styleUrl: './insert-reservation.component.css'
})
export class InsertReservationComponent implements OnInit {

  insertReservationForm: FormGroup;

  device!: IDevice;

  unlimitedReservation: boolean = true;

  constructor(private fb: FormBuilder, private _deviceService: DeviceService) {
    const now = new Date();

    const futureDate = new Date(now);

    futureDate.setDate(now.getDate() + 1);
    futureDate.setHours(0);
    futureDate.setMinutes(0);

    const formattedDateTime = formatDate(futureDate);

    this.insertReservationForm = this.fb.group({
      startAt: [formattedDateTime, [Validators.required, upToDayDate]],
      unlimitedReservation: [this.unlimitedReservation, [Validators.required]],
      duration: ['', timeValidator],
      numberOfGets: [2, [Validators.required, numericValidator, Validators.min(1)]],
    });
  }

  ngOnInit(): void {
    this._deviceService.device$.subscribe((device) => {
      this.device = device;
    });
  }


  onInsertReservation() {
    let values = this.insertReservationForm.value;
    console.log(values)
    values['deviceId'] = this.device.id;
  }

  toggleUnlimitedReservation(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.unlimitedReservation = selectElement.value == 'true';
  }

  getValidationClasses(controlName: string) {
    return getValidationClasses(this.insertReservationForm.get(controlName));
  }
}
