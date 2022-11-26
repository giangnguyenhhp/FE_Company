import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Role} from "../models/role";
import {environment} from "../../../environments/environment";
import {CreateRoleRequest} from "../models/CreateRoleRequest";
import {UpdateRoleRequest} from "../models/UpdateRoleRequest";
import {SetPermissionsRequest} from "../models/SetPermissionsRequest";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllRoles(){
    return this.httpClient.get<Role[]>(`${environment.domain}/api/Role`);
  }

  createRole(request: CreateRoleRequest) {
    return  this.httpClient.post<Role>(`${environment.domain}/api/Role`,request);
  }

  updateRole(request: UpdateRoleRequest) {
    return  this.httpClient.put<Role>(`${environment.domain}/api/Role/update/${request.id}`,request);
  }

  DeleteRole(role: Role) {
    return  this.httpClient.delete<Role>(`${environment.domain}/api/Role/delete/${role.id}`);
  }

  getAllPermissions() {
    return this.httpClient.get<string[]>(`${environment.domain}/api/Role/permissions`);
  }

  mapPermission(request: SetPermissionsRequest) {
    return  this.httpClient.post(`${environment.domain}/api/Role/map-permissions/`,request);
  }

}
