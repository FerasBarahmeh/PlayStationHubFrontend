import {Component, Input} from '@angular/core';
import {VariantButtons} from "../../enums/VariantButtons";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() type: string = 'submit';
  @Input() disabled: boolean = false;
  @Input() variant: VariantButtons = VariantButtons.Primary;
  @Input() class: string = '';
  public setButtonClass(): string
  {
    return `btn ${this._GetVariantButtonName()} text ${this.class} ${this.disabled ? 'btn-disabled' : ''} `;
  }

  private _GetVariantButtonName(): string
  {
    switch (this.variant) {
      case VariantButtons.Primary:
        return 'btn-primary';
      case VariantButtons.Secondary:
        return 'btn-secondary';
      case VariantButtons.Info:
        return 'btn-info';
      case VariantButtons.Warning:
        return 'btn-warning';
      default:
        return '';
    }

  }
}
