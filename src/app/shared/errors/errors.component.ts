import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ErrorComponent } from '../error/error.component';

@Component({
    selector: 'errors',
    templateUrl: './errors.component.html',
    styleUrls: ['./errors.component.css'],
    standalone: true,
    imports: [ErrorComponent],
})
export class ErrorsComponent {
  @Input() control: AbstractControl | null = null;
  @Input() customeMessages: { [key: string]: string } | null = null;
  @Input() inputFieldName: string | null = null;
  @Input() listOfErrorMessages: string[] | null = null;

  public get controlStatus(): boolean {
    return !!(this.control?.invalid && (this.control.dirty || this.control.touched));
  }

  public get errorMessages(): string[] {
    if (this.control?.errors && this.controlStatus) {
      return Object.keys(this.control.errors).map((errorKey) =>
        this._getErrorMessage(errorKey, this.control?.errors![errorKey])
      );
    }

    if (this.listOfErrorMessages)
      return this.listOfErrorMessages;

    return [];
  }

  private _getErrorMessage(errorKey: string, errorValue: any): string {
    const messages: { [key: string]: string } = {
      required: `This ${this.inputFieldName ? this.inputFieldName : 'field'} is required`,
      minlength: `Minimum length is ${errorValue.requiredLength}`,
      maxlength: `Maximum length is ${errorValue.requiredLength}`,
      email: 'Invalid email format',
      hasSpace: `${this.inputFieldName ? this.inputFieldName : 'field'} can't contain spaces`,
    };

    return this.customeMessages != null
      ? messages[errorKey] || this.customeMessages[errorKey] || 'Invalid field'
      : messages[errorKey] || 'Invalid field';
  }
}
