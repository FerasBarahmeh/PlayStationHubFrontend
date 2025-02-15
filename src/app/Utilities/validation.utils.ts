import { AbstractControl } from '@angular/forms';

export function getValidationClasses(control: AbstractControl | null) {
  if (!control) return {};
  return {
    'is-invalid': control.invalid && control.touched,
    'is-valid': control.valid && control.touched,
  };
}

export function getValidationMessages(control: AbstractControl | null) {
  if (!control || !control.errors || !control.touched) return [];

  const messages = [];
  if (control.errors['required']) {
    messages.push('this field is required.');
  }
  if (control.errors['minlength']) {
    messages.push(`this field must be at least {3} characters long.`);
  }
  return messages;
}
