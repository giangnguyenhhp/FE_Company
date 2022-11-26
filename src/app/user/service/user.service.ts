import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/User";
import {environment} from "../../../environments/environment";
import {RegisterUserRequest} from "../model/RegisterUserRequest";
import {Role} from "../../role/models/role";
import {UpdateUserRequest} from "../model/UpdateUserRequest";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient : HttpClient
  ) { }

  getUsers() {
    return this.httpClient.get<User[]>(`${environment.domain}/api/User`)
  }

  registerUser(request: RegisterUserRequest) {
    return this.httpClient.post(`${environment.domain}/api/User/Register`,request)
  }

  registerUserForAdmin(request: RegisterUserRequest) {
    return this.httpClient.post(`${environment.domain}/api/User/Register-for-admin`,request)
  }

  deleteUser(id: string) {
    return this.httpClient.delete<User>(`${environment.domain}/api/User/delete/${id}`)
  }

  getRolesByUserId(id : string) {
    return this.httpClient.get<Role[]>(`${environment.domain}/api/User/get-role-by-user-id/${id}`);
  }

  updateUser(request: UpdateUserRequest) {
    return this.httpClient.put(`${environment.domain}/api/User/update/${request.id}`,request)

  }
}
