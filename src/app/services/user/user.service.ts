import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IUser } from '../../interfaces/user/IUser';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private readonly API_URL = environment.API_URL;

  constructor(private _httpClient: HttpClient) { }

  public users(pageNumber: number, pageSize: number): Observable<IUser[]> {

    let params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString());

    return this._httpClient.get<any>(this.API_URL + 'Users', { withCredentials: true, params: params })
      .pipe(
        map(res => {
          return res.response as IUser[];
        })
      );
  }
}
