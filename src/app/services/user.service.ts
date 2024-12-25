import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.development';
import {HttpClient, HttpParams} from '@angular/common/http';
import {IUser} from '../interfaces/user/IUser';
import {map, Observable} from 'rxjs';
import {IPagedResponse} from '../interfaces/responses/IPagedResponse';
import {ICountResponse} from '../interfaces/responses/ICountResponse';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private readonly API_URL = environment.API_URL + 'Users/';

  constructor(private _httpClient: HttpClient) { }

  public users(pageNumber: number, pageSize: number): Observable<IPagedResponse<IUser>> {

    let params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString());

    return this._httpClient.get<IPagedResponse<IUser>>(this.API_URL, { withCredentials: true, params: params })
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  public count() {
    return this._httpClient.get<ICountResponse>(this.API_URL + 'Count', { withCredentials: true });
  }
}
