import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Company} from "../Models/company";
import {environment} from "../../../environments/environment";
import {AddCompanyRequest} from "../Models/AddCompanyRequest";
import {UpdateCompanyComponent} from "../component/update-company/update-company.component";
import {UpdateCompanyRequest} from "../Models/UpdateCompanyRequest";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(
    private httpClient : HttpClient
  ) { }

  getAllCompany(){
    return this.httpClient.get<Company[]>(`${environment.domain}/api/Company`);
  }

  AddCompany(request:AddCompanyRequest){
    return this.httpClient.post<Company>(`${environment.domain}/api/Company`,request);
  }

  UpdateCompany(request: UpdateCompanyRequest) {
    return this.httpClient.put<Company>(`${environment.domain}/api/Company/update/${request.companyId}`,request);

  }

  deleteCompany(companyId: number) {
    return this.httpClient.delete<Company[]>(`${environment.domain}/api/Company/delete/${companyId}`);
  }

  getDepartmentByCompanyId(id : number) {
    return this.httpClient.get(`${environment.domain}/api/Company/get-department-by-company/${id}`);

  }

  getEmployeeByCompanyId(id:number) {
    return this.httpClient.get(`${environment.domain}/api/Company/get-employee-by-company/${id}`);

  }
}
