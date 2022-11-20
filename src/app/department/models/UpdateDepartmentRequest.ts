export interface UpdateDepartmentRequest{
  name : string,
  numberOf:number,
  departmentId:number,
  employeeId : [number]
  companyId:[number]
}
