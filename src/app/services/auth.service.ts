import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ILogin} from '../interfaces/dataTransfareObjects/users/ILogin';
import {environment} from '../../environments/environment.development';
import {ILoginResponse} from '../interfaces/auth/ILoginResponce';
import {ICheckPrivilege} from '../interfaces/auth/ICheckPrivilege';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly API_URL = environment.API_URL + 'auth/';

  constructor(private _httpClient: HttpClient) {
  }

  public login(model: ILogin): Observable<ILoginResponse> {
    return this._httpClient.post<ILoginResponse>(this.API_URL + "login", model, {withCredentials: true});
  }

  public logout(): Observable<any> {
    return this._httpClient.post(this.API_URL + "logout", {}, {withCredentials: true});
  }

  public isAuthentication(): Observable<boolean> {
    return this._httpClient.post<boolean>(this.API_URL + "IsAuth", {}, {withCredentials: true});
  }

  public authorizedUser(): Observable<any> {
    return this._httpClient.get(this.API_URL + "AuthorizedUser", {withCredentials: true});
  }

  public isAdmin(): Observable<ICheckPrivilege> {
    return this._httpClient.get<ICheckPrivilege>(this.API_URL + 'IsAdmin', {withCredentials: true})
  }

  public isOwner(): Observable<ICheckPrivilege> {
    return this._httpClient.get<ICheckPrivilege>(this.API_URL + 'IsOwner', {withCredentials: true})
  }
}
