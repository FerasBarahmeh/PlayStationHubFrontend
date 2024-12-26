import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {IResponse} from "../interfaces/responses/IResponse";
import {IClub} from "../interfaces/clubs/IClub";

@Injectable({
  providedIn: 'root'
})
export class FeedbackClubService {

  private readonly API_URL = environment.API_URL + 'FeedbackClubs/';


  constructor(private _http: HttpClient) { }

  public getSummary(feedbackClubId: number): Observable<IResponse<IClub>> {
    return this._http.post<IResponse<IClub>>(this.API_URL+'GenerateSummary', {'ClubID': feedbackClubId}, {withCredentials: true})
      .pipe(
        map(response=>{
          return response;
        }),
      )
  }
}
