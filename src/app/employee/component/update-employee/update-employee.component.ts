import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {EmployeeService} from "../../service/employee.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UpdateDepartmentComponent} from "../../../department/component/update-department/update-department.component";
import {UpdateEmployeeRequest} from "../../models/UpdateEmployeeRequest";
import { Department } from 'src/app/department/models/Department';
import { Company } from 'src/app/company/Models/company';
import {DepartmentService} from "../../../department/service/department.service";
import {CompanyService} from "../../../company/Service/company.service";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {
  updateEmployeeFormGroup = new FormGroup({
    employeeId : new FormControl,
    name: new FormControl,
    address: new FormControl,
    birth : new FormControl,
    companyId: new FormControl,
    departmentId: new FormControl,
  });
  departments: Department[] = [];
  companies: Company[] = [];

  constructor(
    private employeeService: EmployeeService,
    private dialogRef: MatDialogRef<UpdateDepartmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any,
    private departmentService : DepartmentService,
    private companyService : CompanyService

  ) { }

  ngOnInit(): void {
    this.initFormData()
    this.getDepartments();
    this.getCompanies();
  }


  submit() {
    const request = <UpdateEmployeeRequest>this.updateEmployeeFormGroup.value
    this.employeeService.updateEmployee(request).subscribe(res => {
      if (res){
        this.dialogRef.close(true);
      }
    })
  }

  private initFormData() {
    this.updateEmployeeFormGroup.patchValue(this.data);
  }

  private getDepartments() {
    this.departmentService.getDepartments().subscribe(res => {
      if(res){
        this.departments = res;
      }
    })
  }

  private getCompanies() {
    this.companyService.getAllCompany().subscribe(res=>{
      if(res){
        this.companies = res;
      }
    })
  }
}
