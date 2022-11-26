import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginRequest} from "../models/LoginRequest";
import {environment} from "../../../../environments/environment";
import {AuthResponse} from "../models/AuthResponse";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public permissions : string[]=[]
  constructor(
    private httpClient: HttpClient,
  ) { }

  loginUser(request : LoginRequest) {
    return this.httpClient.post<AuthResponse>(`${environment.domain}/api/Authenticate/login`,request)
  }
}


