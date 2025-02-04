import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AdminComponent} from "../../layouts/admin/admin.component";

@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  standalone: true,
  imports: [
    RouterModule,
    AdminComponent
  ]
})
export class AdminDashboardComponent {
}
