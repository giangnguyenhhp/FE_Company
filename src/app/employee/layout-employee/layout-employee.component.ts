import {Component, OnInit} from '@angular/core';
import {Employee} from "../models/Employee";
import {EmployeeService} from "../service/employee.service";
import {MatDialog} from "@angular/material/dialog";
import {AddEmployeeComponent} from "../component/add-employee/add-employee.component";
import {UpdateEmployeeComponent} from "../component/update-employee/update-employee.component";
import {Company} from "../../company/Models/company";
import { CompanyService } from 'src/app/company/Service/company.service';

@Component({
  selector: 'app-layout-employee',
  templateUrl: './layout-employee.component.html',
  styleUrls: ['./layout-employee.component.scss']
})
export class LayoutEmployeeComponent implements OnInit {
  Employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  OpenCreateEmployeeDialog() {
    this.dialog.open(AddEmployeeComponent).afterClosed().subscribe(res => {
      if (res) {
        this.getEmployees();
      }
    })
  }

  OpenUpdateEmployeeDialog(employee: Employee) {
    this.dialog.open(UpdateEmployeeComponent, {data: employee}).afterClosed().subscribe(res => {
      if (res) {
        this.getEmployees();
      }
    })
  }

  DeleteEmployee(EmployeeId: number) {
    let confirmResult = confirm("Are you sure you want to delete this employee?")
    if (confirmResult) {
      this.employeeService.deleteEmployee(EmployeeId).subscribe(res => {
        if (res) {
          this.getEmployees();
        }
      })
    }
  }

  private getEmployees() {
    this.employeeService.getEmployees().subscribe(res => {
      if (res) {
        this.Employees = res;
        console.log(this.Employees)
      }
    })
  }

}
