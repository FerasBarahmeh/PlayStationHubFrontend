import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-backend-errors',
  standalone: true,
  imports: [],
  templateUrl: './backend-errors.component.html',
  styleUrl: './backend-errors.component.css'
})
export class BackendErrorsComponent {
  @Input()
  errors: { [key: string]: string[] } = {};
  protected readonly Object = Object;
}
