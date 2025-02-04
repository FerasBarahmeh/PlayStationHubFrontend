import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of, tap, throwError} from "rxjs";
import {ILogin} from '../interfaces/dataTransfareObjects/users/ILogin';
import {environment} from '../../environments/environment.development';
import {ILoginResponse} from '../interfaces/auth/ILoginResponce';
import {ICheckPrivilege} from '../interfaces/auth/ICheckPrivilege';
import {IResponse} from "../interfaces/responses/IResponse";
import {IUser} from "../interfaces/user/IUser";

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

  public isAuthontication(): Observable<boolean> {
    return this._httpClient.post<boolean>(this.API_URL + "IsAuth", {}, {withCredentials: true}).pipe(
      map(() => true), catchError((error) => {
        if (error.status === 401) {
          return of(false);
        }
        return throwError(() => error);
      })
    )
  }

  public authorizedUser(): Observable<any> {
    return this._httpClient.get(this.API_URL + "AuthorizedUser", {withCredentials: true});
  }

  public isAdmin(): Observable<ICheckPrivilege> {
    return this._httpClient.get<ICheckPrivilege>(this.API_URL + 'IsAdmin', {withCredentials: true})
  }

  public isUser(): Observable<ICheckPrivilege> {
    return this._httpClient.get<ICheckPrivilege>(this.API_URL + 'IsUser', {withCredentials: true})
  }

  public isOwner(): Observable<ICheckPrivilege> {
    return this._httpClient.get<ICheckPrivilege>(this.API_URL + 'IsOwner', {withCredentials: true})
  }
}
