import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
})
export class LogoutComponent {
  constructor(private _AuthServie: AuthService, private _Router: Router) { }

  public logout() {
    return this._AuthServie.logout().subscribe(res => {
      this._Router.navigate(['/auth/login']);
      console.log("You are logging out")
    })
  }
}