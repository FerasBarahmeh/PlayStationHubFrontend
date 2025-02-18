import {AbstractControl} from "@angular/forms";

export function numericValidator(control: AbstractControl): { [key: string]: any } | null {
  const value = control.value;
  return !isNaN(parseFloat(value)) && isFinite(value) ? null : {notNumeric: true};
}
