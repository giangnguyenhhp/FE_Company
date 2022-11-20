import {Component, Inject, OnInit} from '@angular/core';
import {Department} from "../models/Department";
import {DepartmentService} from "../service/department.service";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {AddDepartmentRequest} from "../models/AddDepartmentRequest";
import {AddDepartmentComponent} from "../component/add-department/add-department.component";
import {UpdateDepartmentComponent} from "../component/update-department/update-department.component";

@Component({
  selector: 'app-layout-department',
  templateUrl: './layout-department.component.html',
  styleUrls: ['./layout-department.component.scss']
})
export class LayoutDepartmentComponent implements OnInit {
  departments: Department[] = [];

  constructor(
    private departmentService: DepartmentService,
    private dialog : MatDialog,
  ) { }

  ngOnInit(): void {
    this.getDepartments();
  }


  OpenCreateDepartmentDialog() {
    this.dialog.open(AddDepartmentComponent).afterClosed().subscribe(res => {
      if(res){
        return this.getDepartments()
      }
    })
  }

  OpenUpdateDepartmentDialog(department: Department) {
    this.dialog.open(UpdateDepartmentComponent,{data:department}).afterClosed().subscribe(res => {
      if(res){
        return this.getDepartments()
      }
    })
  }

  DeleteDepartment(departmentId: number) {
    let confirmResult = confirm('Are you sure you want to delete')
    if (confirmResult) {
      this.departmentService.deleteDepartment(departmentId).subscribe(res => {
        if (res) {
          this.getDepartments();
        }
      })
    }
  }

  private getDepartments() {
    this.departmentService.getDepartments().subscribe(res => {
      if(res){
        this.departments = res;
        console.log(this.departments);
      }
    })
  }
}
