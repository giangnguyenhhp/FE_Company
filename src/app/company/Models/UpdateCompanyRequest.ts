export interface UpdateCompanyRequest {
  companyId : number,
  nameCompany: string,
  address: string,
  description: string,
  employeeId: [number],
  departmentId: [number]
}
