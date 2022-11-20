import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Employee} from "../models/Employee";
import {environment} from "../../../environments/environment";
import {AddEmployeeRequest} from "../models/AddEmployeeRequest";
import {UpdateEmployeeRequest} from "../models/UpdateEmployeeRequest";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getEmployees() {
    return this.httpClient.get<Employee[]>(`${environment.domain}/api/Employee`)
  }

  addEmployee(request: AddEmployeeRequest) {
    return this.httpClient.post(`${environment.domain}/api/Employee`,request)
  }

  updateEmployee(request: UpdateEmployeeRequest) {
    return this.httpClient.put(`${environment.domain}/api/Employee/update/${request.employeeId}`,request)
  }

  deleteEmployee(EmployeeId: number) {
    return this.httpClient.delete(`${environment.domain}/api/Employee/delete/${EmployeeId}`)
  }
}
