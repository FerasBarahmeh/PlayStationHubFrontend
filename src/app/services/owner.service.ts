import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {IOwnersCoreDetails} from "../interfaces/owners/IOwnersCoreDetails";
import {Observable} from "rxjs";
import {IResponse} from "../interfaces/responses/IResponse";

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  private readonly API_URL = environment.API_URL + 'Owners/';

  constructor(private _httpClient: HttpClient) { }

  getOwnersCoreDetails():Observable<IResponse<IOwnersCoreDetails[]>> {
    return this._httpClient.get<IResponse<IOwnersCoreDetails[]>>(this.API_URL + 'GetOwnersCoreDetails', {withCredentials: true});
  }
}
