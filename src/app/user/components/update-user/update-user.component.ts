import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup} from "@angular/forms";
import {Role} from "../../../role/models/role";
import {RoleService} from 'src/app/role/service/role.service';
import {UserService} from '../../service/user.service';
import {UpdateUserRequest} from "../../model/UpdateUserRequest";
import {User} from "../../model/User";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  updateUserFormGroup = new FormGroup({
    userName: new FormControl(),
    phoneNumber: new FormControl(),
    email: new FormControl(),
    roles: new FormControl(),
    id: new FormControl(),
  });
  roles: Role[] = [];
  userRoles: string[] = [];

  constructor(
    private dialogRef: MatDialogRef<UpdateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UpdateUserRequest,
    private roleService: RoleService,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.initFormData()
    this.getRolesByUser()
    this.getAllRoles()

  }

  private initFormData() {
    this.updateUserFormGroup.patchValue(this.data)
  }

  submit() {
    const request = <UpdateUserRequest>this.updateUserFormGroup.value
    this.userService.updateUser(request).subscribe(response => {
      if (response) {
        this.dialogRef.close(true)
      }
    })
  }

  private getRolesByUser() {
    this.userService.getRolesByUserId(this.data.id).subscribe((res: any) => {
      this.userRoles = res;
      this.updateUserFormGroup.controls.roles.setValue(this.userRoles)
      console.log(this.userRoles)
    })
  }

  private getAllRoles() {
    this.roleService.getAllRoles().subscribe(r => {
      if (r) {
        this.roles = r
      }
    })
  }
}
