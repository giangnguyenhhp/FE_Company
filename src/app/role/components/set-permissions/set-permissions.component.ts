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
    this.getPermissions();
    this.setCheckedPermissions();
  }

  submit() {
    const request: SetPermissionsRequest = <SetPermissionsRequest>{
      roleClaims: this.checkedPermissions,
      id: this.data?.role?.id,
    }
    this.roleService.mapPermission(request).subscribe(r => {
      if (r) {
        this.dialogRef.close(true);
      }
    })
  }

  private getPermissions() {
    this.roleService.getAllPermissions().subscribe(res => {
      if (res) {
        this.permissions = res;
      } else {
        this.permissions = [];
      }
    })
  }


  //Event check-box-change, nếu check vào mat-box thì sẽ đẩy permission đó vào mảng checkedPermission
  checkPermission(permission: string, $event: MatCheckboxChange) {
    if ($event.checked) {
      this.checkedPermissions.push(permission)
    } else {
      //nếu không được check thì sẽ loại bỏ permission đó ra khỏi mảng checkedPermission
      this.checkedPermissions = this.checkedPermissions.filter(x => x != permission)
    }
    console.log(this.checkedPermissions)
  }

  //Kiểm tra xem nếu permissions được check thì sẽ thêm vào checkedPermissions
  isCheck(permission: string) {
    return this.checkedPermissions.includes(permission);
  }

  //Method hiển thị những permission đã được map với role trong mat-check-box
  private setCheckedPermissions() {
    this.checkedPermissions = this.data?.role?.roleClaims ? this.data?.role?.roleClaims.map((p: any) => p.value) : [];
    console.log(this.checkedPermissions)
  }
}
