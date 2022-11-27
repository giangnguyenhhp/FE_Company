export interface UpdateCompanyRequest {
  companyId : number,
  nameCompany: string,
  address: string,
  description: string,
  employeeName: string[],
  departmentName: [string]
}
