import { Component, OnInit } from '@angular/core';
import { AdminDashboardComponent } from '../admins/admin-dashboard/admin-dashboard.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  standalone: true,
  imports: [
    AdminDashboardComponent
  ]
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
