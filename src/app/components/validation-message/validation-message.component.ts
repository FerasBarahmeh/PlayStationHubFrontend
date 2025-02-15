import {Component, Input} from '@angular/core';
import {AbstractControl} from "@angular/forms";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faDotCircle} from "@fortawesome/free-solid-svg-icons/faDotCircle";

@Component({
  selector: 'app-validation-message',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './validation-message.component.html',
  styleUrl: './validation-message.component.css'
})
export class ValidationMessageComponent {
  @Input({required: true})
  control!: AbstractControl | null;
  @Input({required: false})
  errorMessages: { [key: string]: string } = {};


  getValidationMessages(): string[] {
    if (!this.control || !this.control.errors || !this.control.touched) return [];

    const messages = [];

    for (const errorKey in this.control.errors) {

      if (this.errorMessages[errorKey]) {
        messages.push(this.errorMessages[errorKey]);
      } else {
        messages.push(`Validation error: ${errorKey}`);
      }
    }

    return messages;
  }

  protected readonly faDotCircle = faDotCircle;
}
