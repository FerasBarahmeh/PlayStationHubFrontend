import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { AdminDashboardComponent } from '../admins/admin-dashboard/admin-dashboard.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [
    AdminDashboardComponent
  ]
})
export class DashboardComponent implements OnInit {

  public isAdmin!: boolean;

  public isOwner!: boolean;

  private _authService: AuthService;

  private router!: Router;

  constructor(authServic: AuthService, router: Router) {
    this._authService = authServic;
    this.router = router;
  }

  ngOnInit(): void {
    this._setPrivileges();
    if (!this.isAdmin || !this.isOwner)
      this.router.navigateByUrl('auth/login');
  }

  private _setPrivileges(): void {
    this._authService.isAdmin().subscribe(res => this.isAdmin = res.response);
  }
}
