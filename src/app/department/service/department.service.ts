import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Department} from "../models/Department";
import {environment} from "../../../environments/environment";
import {AddDepartmentRequest} from "../models/AddDepartmentRequest";
import {UpdateDepartmentRequest} from "../models/UpdateDepartmentRequest";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getDepartments() {
    return this.httpClient.get<Department[]>(`${environment.domain}/api/Department`)
  }

  addDepartment(request: AddDepartmentRequest) {
    return this.httpClient.post(`${environment.domain}/api/Department/`,request)
  }

  updateDepartment(request: UpdateDepartmentRequest) {
    return this.httpClient.put(`${environment.domain}/api/Department/update/${request.departmentId}`,request)

  }

  deleteDepartment(departmentId: number) {
    return this.httpClient.delete(`${environment.domain}/api/Department/delete/${departmentId}`)

  }

}
