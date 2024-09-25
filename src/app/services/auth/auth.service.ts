import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ILogin } from '../../interfaces/dataTransfareObjects/users/ILogin';
import { environment } from '../../../environments/environment.development';
import { ILoginResponse } from '../../interfaces/auth/ILoginResponce';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly API_URL = environment.API_URL + 'auth/';

  constructor(private _HttpClient: HttpClient) { }

  public login(model: ILogin): Observable<ILoginResponse> {
    return this._HttpClient.post<ILoginResponse>(this.API_URL + "login", model, { withCredentials: true });
  }

  public logout(): Observable<any> {
    return this._HttpClient.post(this.API_URL + "logout", {}, { withCredentials: true });
  }

  public IsAuthontication(): Observable<boolean> {
    return this._HttpClient.get<boolean>(this.API_URL + "IsAuth", { withCredentials: true })
  }
  public IsAdmin(): Observable<any> {
    return this._HttpClient.get(this.API_URL + 'IsAdmin', { withCredentials: true })
  }
  public IsUser(): Observable<any> {
    return this._HttpClient.get(this.API_URL + 'IsUser', { withCredentials: true })
  }
  public IsOwner(): Observable<any> {
    return this._HttpClient.get(this.API_URL + 'IsOwner', { withCredentials: true })
  }
}
