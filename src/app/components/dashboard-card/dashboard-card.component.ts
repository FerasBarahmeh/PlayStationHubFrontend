import {Component, Input} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-dashboard-card',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.css'
})
export class DashboardCardComponent {

  @Input() icon!: any;
  @Input() value!: any;
  @Input() label!: any;
}
