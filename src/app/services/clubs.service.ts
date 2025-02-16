import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IClub} from "../interfaces/clubs/IClub";
import {IResponse} from "../interfaces/responses/IResponse";
import {IInsertClub} from "../interfaces/clubs/IInsertClub";
import {IOwner} from "../interfaces/owners/IOwner";
import {Status} from "../enums/Status";
import {IClubCore} from "../interfaces/clubs/IClubCore";

@Injectable({
  providedIn: 'root'
})
export class ClubsService {
  private readonly API_URL = environment.API_URL + 'Clubs/';

  constructor(private _httpClient: HttpClient) {
  }

  clubs(): Observable<IResponse<IClub[]>> {
    return this._httpClient.get<IResponse<IClub[]>>(this.API_URL, {withCredentials: true});
  }

  find(id: number): Observable<IResponse<IClub>> {
    return this._httpClient.post<IResponse<IClub>>(this.API_URL + 'Find', {"ID": id}, {withCredentials: true});
  }

  insert(newClub: IInsertClub) {
    newClub.status = newClub.status ?? Status.active.value;
    return this._httpClient.post<IResponse<IOwner>>(this.API_URL + 'Insert', newClub, {withCredentials: true});
  }
  softDelete(clubId: number) {
    return this._httpClient.patch<IResponse<object>>(this.API_URL + 'SoftDelete', {id: clubId}, {withCredentials: true});
  }
  GetAuthenticatedUserClubsHighlights() {
    return this._httpClient.get<IResponse<IClubCore[]>>(this.API_URL + 'GetAuthenticatedUserClubsHighlights', {withCredentials: true});
  }
}
