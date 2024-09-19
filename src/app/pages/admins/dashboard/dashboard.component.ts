import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  public welcomeMessage?: string;

  constructor(private _AuthServie: AuthService, private _Router: Router, private _sahredService: SharedService) { }

  ngOnInit(): void {
    this._sahredService.currentMessage.subscribe(message => this.welcomeMessage = message);
  }

  public logout() {
    return this._AuthServie.logout().subscribe(res => {
      this._Router.navigate(['/auth/login']);
      console.log("You are logging out")
    })
  }
}
