import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { EmployeeService } from '../../service/employee.service';
import {MatDialogRef} from "@angular/material/dialog";
import {AddEmployeeRequest} from "../../models/AddEmployeeRequest";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  addEmployeeFormGroup = new FormGroup({
    employeeId : new FormControl,
    name: new FormControl,
    address: new FormControl,
    birth : new FormControl
  });

  constructor(
    private employeeService: EmployeeService,
    private dialogRef: MatDialogRef<AddEmployeeComponent>
  ) { }

  ngOnInit(): void {

  }


  submit() {
    const request = <AddEmployeeRequest>this.addEmployeeFormGroup.value
    this.employeeService.addEmployee(request).subscribe(res => {
      if (res){
        this.dialogRef.close(true);
      }
    })
  }
}
