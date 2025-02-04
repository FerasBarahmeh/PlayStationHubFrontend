import { Component } from '@angular/core';
import {OwnerComponent} from "../../layouts/owner/owner.component";

@Component({
  selector: 'app-owner-dashboard',
  standalone: true,
  imports: [
    OwnerComponent
  ],
  templateUrl: './owner-dashboard.component.html',
  styleUrl: './owner-dashboard.component.css'
})
export class OwnerDashboardComponent {

}
