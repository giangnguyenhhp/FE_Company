import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { DepartmentService } from '../../service/department.service';
import {UpdateDepartmentRequest} from "../../models/UpdateDepartmentRequest";
import { Company } from 'src/app/company/Models/company';
import { Employee } from 'src/app/employee/models/Employee';
import { CompanyService } from 'src/app/company/Service/company.service';
import {EmployeeService} from "../../../employee/service/employee.service";

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.scss']
})
export class UpdateDepartmentComponent implements OnInit {
  updateDepartmentFormGroup = new FormGroup({
    name: new FormControl,
    numberOf: new FormControl,
    departmentId: new FormControl,
    companyName: new FormControl,
    employeeName: new FormControl,
  });
  companies : Company[] = [];
  employees: Employee[] = [];

  employeeOfDepartment : string[] = []
  companyOfDepartment : string[] = []

  constructor(
    @Inject(MAT_DIALOG_DATA) public data : any,
    private dialogRef: MatDialogRef<UpdateDepartmentComponent>,
    private departmentService: DepartmentService,
    private companyService: CompanyService,
    private employeeService : EmployeeService
  ) { }

  ngOnInit(): void {
    this.initFormData();
    this.getCompanies();
    this.getEmployees();
    this.getEmployeeOfDepartment();
    this.getCompanyOfDepartment();
  }

  private initFormData() {
    this.updateDepartmentFormGroup.patchValue(this.data)
  }

  submit() {
    const request = <UpdateDepartmentRequest>this.updateDepartmentFormGroup.value
    this.departmentService.updateDepartment(request).subscribe(res=>{
      if (res){
        this.dialogRef.close(true)
      }
    })
  }

  private getCompanies() {
    this.companyService.getAllCompany().subscribe(res=>{
      if (res){
        this.companies = res;
      }
    })
  }

  private getEmployees() {
    this.employeeService.getEmployees().subscribe(res=>{
      if (res){
        this.employees = res;
      }
    })
  }

  private getEmployeeOfDepartment() {
    this.departmentService.getEmployeeOfDepartment(this.data.departmentId).subscribe((res: any)=>{
      this.employeeOfDepartment = res
      this.updateDepartmentFormGroup.controls.employeeName.setValue(this.employeeOfDepartment)
    })
  }

  private getCompanyOfDepartment() {
    this.departmentService.getCompanyOfDepartment(this.data.departmentId).subscribe((res:any)=>{
      this.companyOfDepartment = res
      this.updateDepartmentFormGroup.controls.companyName.setValue(this.companyOfDepartment)
    })
  }
}
