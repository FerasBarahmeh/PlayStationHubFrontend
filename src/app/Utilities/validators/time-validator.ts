import {AbstractControl} from "@angular/forms";

export function timeValidator(control: AbstractControl): { [key: string]: any } | null {
  let value = control.value;
  const regex = /^(0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
  return  regex.test(value) ? null: {inValid:  true};
}
