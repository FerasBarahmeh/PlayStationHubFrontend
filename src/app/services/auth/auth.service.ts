import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { ILogin } from '../../interfaces/dataTransfareObjects/users/ILogin';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly API_URL = environment.API_URL + 'auth/';
  constructor(private _HttpClient: HttpClient) { }

  public login(model: ILogin): Observable<any> {
    return this._HttpClient.post(this.API_URL + "login", model, { withCredentials: true });
  }

  public logout(): Observable<any> {
    return this._HttpClient.post(this.API_URL + "logout", {}, { withCredentials: true });
  }

  public IsAuthontication(): Observable<boolean> {
    return this._HttpClient.get<boolean>(this.API_URL + "IsAuth", { withCredentials: true })
  }
}
