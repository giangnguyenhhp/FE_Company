import { Component, OnInit } from '@angular/core';
import {RoleService} from "../../service/role.service";
import {MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CreateRoleRequest} from "../../models/CreateRoleRequest";

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.scss']
})
export class CreateRoleComponent implements OnInit {
  addRoleFormGroup = new FormGroup({
    name : new FormControl()
  });

  constructor(
    private roleService: RoleService,
    private dialogRef: MatDialogRef<CreateRoleComponent>
  ) { }

  ngOnInit(): void {
  }

  submit() {
    const request = <CreateRoleRequest> this.addRoleFormGroup.value
    this.roleService.createRole(request).subscribe(res => {
      if(res)
        this.dialogRef.close(true);
    })
  }
}
