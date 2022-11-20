import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CompanyService} from "../../Service/company.service";
import {UpdateCompanyRequest} from "../../Models/UpdateCompanyRequest";
import {Department} from "../../../department/models/Department";
import {Employee} from "../../../employee/models/Employee";
import {EmployeeService} from "../../../employee/service/employee.service";
import {DepartmentService} from "../../../department/service/department.service";

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.scss']
})
export class UpdateCompanyComponent implements OnInit {
  departments: Department[] = [];
  employees: Employee[] = [];
  UpdateCompanyFormGroup= new FormGroup({
    nameCompany: new FormControl,
    address: new FormControl,
    description: new FormControl,
    employeeId: new FormControl,
    departmentId: new FormControl,
    companyId: new FormControl
  })

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private companyService: CompanyService,
    private dialogRef: MatDialogRef<UpdateCompanyRequest>,
    private employeeService : EmployeeService,
    private departmentService: DepartmentService
  ) { }

  ngOnInit(): void {
    this.initFormData();
    this.getDepartments();
    this.getEmployees();

  }

  submit() {
    const request = <UpdateCompanyRequest> this.UpdateCompanyFormGroup.value;
    this.companyService.UpdateCompany(request).subscribe(res => {
      this.dialogRef.close(true);
    })
    console.log(this.UpdateCompanyFormGroup.value)
  }

  private getEmployees() {
    this.employeeService.getEmployees().subscribe(res => {
      this.employees = res;
    })

  }

  private initFormData() {
    this.UpdateCompanyFormGroup.patchValue(this.data)
  }

  private getDepartments() {
    this.departmentService.getDepartments().subscribe(res => {
      if (res){
        this.departments = res;
      }
    })
  }
}
