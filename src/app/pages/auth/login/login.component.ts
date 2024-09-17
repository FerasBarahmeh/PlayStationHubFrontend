import { Component } from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {AppModule} from "../../../app.module";
import {ILogin} from "../../../interfaces/dataTransfareObjects/users/ILogin";
import {AuthService} from "../../../services/auth/auth.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    AppModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [
    AuthService,
  ]
})

export class LoginComponent
{
  constructor(private  _AuthService : AuthService) {}

  public loginFields: ILogin = {
    username: '',
    password: '',
  };

  public  Login(LoginForm: NgForm) {
    return  this._AuthService.login(this.loginFields).subscribe(res => {
      console.log(res);
    });
  }
  public isAuth() {
    return this._AuthService.IsAuthontication().subscribe(res => {
      console.log(res);
    });
  }
}
