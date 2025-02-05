import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  template: '<p>Logging out, please wait...</p>',
  selector: 'app-logout',
  standalone: true,
})
export class LogoutComponent implements OnInit{
  constructor(private _authService: AuthService, private _Router: Router) { }

  ngOnInit(): void {
    this.logout();
  }

  public logout() {
    return this._authService.logout().subscribe(res => {
      this._Router.navigateByUrl('/home').then(r=>r);
      console.log("You are logging out")
    })
  }
}
