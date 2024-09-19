import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function hasSpace(controlName: string): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const control = formGroup.get(controlName);

    if (!control) return null;
    
    const value = control.value;
    
    if (value && value.includes(' ')) {
      
      control.setErrors({ hasSpace: true });
      return { hasSpace: true };
    } 

    return null;
  };
}