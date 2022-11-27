import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {RoleService} from '../../service/role.service';
import {MatCheckboxChange} from "@angular/material/checkbox";
import {SetPermissionsRequest} from "../../models/SetPermissionsRequest";

@Component({
  selector: 'app-set-permissions',
  templateUrl: './set-permissions.component.html',
  styleUrls: ['./set-permissions.component.scss']
})
export class SetPermissionsComponent implements OnInit {
  permissions: string[] = [];
  checkedPermissions: string[] = [];

  constructor(
    private roleService: RoleService,
    private dialogRef: MatDialogRef<SetPermissionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  ngOnInit(): void {
    this.getAllPermissions();
    this.setCheckedPermissions();
  }

  private getAllPermissions() {
    this.roleService.getAllPermissions().subscribe(r => {
      if (r) {
        this.permissions = r;
        console.log(this.permissions);
      } else {
        this.permissions = [];
      }
    })
  }

  checkPermission(permission: string, $event: MatCheckboxChange) {
    if ($event.checked) {
      this.checkedPermissions.push(permission);
    } else {
      this.checkedPermissions = this.checkedPermissions.filter(p => p !== permission);
    }
    console.log(this.checkedPermissions);
  }

  isCheck(permission: string) {
    return this.checkedPermissions.includes(permission)
  }

  submit() {
    const request = <SetPermissionsRequest>{
      permissions: this.checkedPermissions,
      roleId: this.data.role.id,
    }
    this.roleService.mapPermission(request).subscribe(r => {
      if (r) {
        this.dialogRef.close(true);
      }
    })
  }

  private setCheckedPermissions() {
    if (this.data.role.roleClaims) {
      this.checkedPermissions = this.data.role.roleClaims.map((p: any) => p.value)
    }
    console.log(this.checkedPermissions)
  }
}
