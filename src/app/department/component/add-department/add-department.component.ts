import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import { MatDialogRef } from '@angular/material/dialog';
import { DepartmentService } from '../../service/department.service';
import {AddDepartmentRequest} from "../../models/AddDepartmentRequest";

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {
  addDepartmentFormGroup = new FormGroup({
    name: new FormControl,
    numberOf:new FormControl
  });

  constructor(
    private departmentService: DepartmentService,
    private dialogRef: MatDialogRef<AddDepartmentComponent>
  ) { }

  ngOnInit(): void {
  }

  submit() {
    const request = <AddDepartmentRequest> this.addDepartmentFormGroup.value
    this.departmentService.addDepartment(request).subscribe(response => {
      if (response){
        return this.dialogRef.close(true)
      }
    })
  }
}
