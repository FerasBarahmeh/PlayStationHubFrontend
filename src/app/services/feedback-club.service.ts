import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map, Observable, throwError} from "rxjs";
import {IResponse} from "../interfaces/responses/IResponse";
import {IClub} from "../interfaces/clubs/IClub";
import {catchError} from "rxjs/operators";
import {IFeedbackClubRequest} from "../interfaces/requests/IFeedbackClubRequest";

@Injectable({
  providedIn: 'root'
})
export class FeedbackClubService {

  private readonly API_URL = environment.API_URL + 'FeedbackClubs/';


  constructor(private _http: HttpClient) { }

  public getSummary(feedbackClubId: number): Observable<IResponse<IClub>> {
    return this._http.post<IResponse<IClub>>(this.API_URL+'GenerateSummary', {'ID': feedbackClubId}, {withCredentials: true})
      .pipe(
        map(response=>{
          return response;
        }),
      )
  }

  public getOverview(feedbackClubId: IFeedbackClubRequest): Observable<IResponse<any>> {
    return this._http.post<IResponse<IClub>>(this.API_URL+'GenerateSummary', feedbackClubId, {withCredentials: true})
      .pipe(
        map(response=>{
          return response;
        }),
      )
  }

  public getFeedbacks(clubId: number): Observable<IResponse<any>> {
    return this._http.post<IResponse<any>>(this.API_URL+'GetFeedbacks', {'ID':clubId}, {withCredentials: true})
      .pipe(
        map(response => {
          return response;
        })
      )
  }

  public setFeedback(feedbackClubId: number, feedback: string) : Observable<IResponse<any>> {
    return this._http.post<IResponse<any>>(this.API_URL, {'clubID':feedbackClubId, 'feedback': feedback}, {withCredentials: true})
    .pipe(
      map(response =>{
        return response;
      }),
      catchError((error) => {
        return throwError(() => error.error.errors || 'An unexpected error occurred.');
      })
    );
  }
}
