import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RoleService} from "../../service/role.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UpdateRoleRequest} from "../../models/UpdateRoleRequest";

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.scss']
})
export class UpdateRoleComponent implements OnInit {
  updateRoleFormGroup = new FormGroup({
    name : new FormControl(),
    id : new FormControl()
  });

  constructor(
    private roleService: RoleService,
    private dialogRef: MatDialogRef<UpdateRoleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.initFormData();
  }

  submit() {
    const request = <UpdateRoleRequest> this.updateRoleFormGroup.value
    this.roleService.updateRole(request).subscribe(res => {
      if(res)
        this.dialogRef.close(true);
    })
  }

  private initFormData() {
    this.updateRoleFormGroup.patchValue(this.data);
  }
}
