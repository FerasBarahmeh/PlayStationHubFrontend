import {AbstractControl} from "@angular/forms";

export function upToDayDate(control: AbstractControl) {
  const value = control.value;
  let date = new Date(value);
  let check = date > new Date(Date.now());
  return check ? null : {inValid: true};
}
