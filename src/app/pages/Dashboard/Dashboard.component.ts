import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { AdminDashboardComponent } from '../admins/AdminDashboard/AdminDashboard.component';

@Component({
  selector: 'app-Dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.css'],
  standalone: true,
  imports: [
    AdminDashboardComponent
  ]
})
export class DashboardComponent implements OnInit {

  public isAdmin!: boolean;

  public isOwner!: boolean;


  private _authService: AuthService;

  constructor(authServic: AuthService) {
    this._authService = authServic;
  }
  ngOnInit(): void {
    this._setPrivileges();
  }


  private _setPrivileges(): void {
    this._authService.IsAdmin().subscribe(res => this.isAdmin = res.data);
    this._authService.IsAdmin().subscribe(res => this.isOwner = res.data);
  }



}
