import {Department} from "../../department/models/Department";

export interface Company {
  companyId : number,
  nameCompany : string,
  address : string,
  description : string,
  department:string[]
}
