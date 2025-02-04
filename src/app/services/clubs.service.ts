import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {IClub} from "../interfaces/clubs/IClub";
import {IResponse} from "../interfaces/responses/IResponse";

@Injectable({
  providedIn: 'root'
})
export class ClubsService {
  private readonly API_URL = environment.API_URL + 'clubs/';

  constructor(private _httpClient: HttpClient) {
  }

  public clubs(): Observable<IResponse<IClub>> {
    return this._httpClient.get<IResponse<IClub>>(this.API_URL, {withCredentials: true})
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  public find(id: number): Observable<IResponse<IClub>> {
    return this._httpClient.post<IResponse<IClub>>(this.API_URL + 'Find', {"ID": id}, {withCredentials: true})
      .pipe(
        map(res => {
          return res;
        })
      );
  }
}
