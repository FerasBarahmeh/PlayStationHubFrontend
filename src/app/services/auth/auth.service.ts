import { Injectable } from '@angular/core';
import {apiConfig} from "../../app.config";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private readonly API_URL = apiConfig.URL + 'auth/';
  constructor(private  http: HttpClient) { }

  public login(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }
}
