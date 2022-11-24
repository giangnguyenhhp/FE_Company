import {Company} from "../../company/Models/company";
import {Department} from "../../department/models/Department";

export interface Employee{
  "employeeId": number
  "name": string
  "address": string
  "birth": string
  company:Company
  department:Department
}
