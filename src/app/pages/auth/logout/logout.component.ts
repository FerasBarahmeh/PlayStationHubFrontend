import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  template: '<p>Logging out, please wait...</p>',
  selector: 'app-logout',
  standalone: true,
})
export class LogoutComponent implements OnInit{
  constructor(private _AuthServie: AuthService, private _Router: Router) { }
  
  ngOnInit(): void {
    this.logout();
  }

  public logout() {
    return this._AuthServie.logout().subscribe(res => {
      this._Router.navigate(['/auth/login']);
      console.log("You are logging out")
    })
  }
}
