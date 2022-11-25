import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {
  PasswordConfirmationValidatorService
} from "../../../Core/login/Service/password-confirmation-validator.service";
import {RegisterUserRequest} from "../../model/RegisterUserRequest";
import {MatDialogRef} from "@angular/material/dialog";
import {Role} from "../../../role/models/role";
import {RoleService} from "../../../role/service/role.service";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-register-for-admin',
  templateUrl: './register-for-admin.component.html',
  styleUrls: ['./register-for-admin.component.scss']
})
export class RegisterForAdminComponent implements OnInit {
  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    confirmPassword: new FormControl('', Validators.required),
    roles: new FormControl()
  });
  showError!: boolean;
  errorMessage: string='';
  roles: Role[] = [];
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private userService: UserService,
    private router: Router,
    private passConfValidator: PasswordConfirmationValidatorService,
    private dialogRef: MatDialogRef<RegisterForAdminComponent>,
    private roleService: RoleService,
    private _snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.getAllRoles()
    // @ts-ignore
    this.registerForm.get('confirmPassword').setValidators([Validators.required, this.passConfValidator.validateConfirmPassword(this.registerForm.get('password'))]);
  }

  submit() {
    const request = <RegisterUserRequest>this.registerForm.value
    this.userService.registerUserForAdmin(request).subscribe({
      next: () => {
        this.openSnackBar('Tạo tài khoản thành công')
        this.dialogRef.close(true)
      },
      error: (err: HttpErrorResponse) => {
        this.errorMessage = err.message;
        this.showError=true;
        this.openSnackBar('Tạo tài khoản thất bại')
      }
    })
  }

  validateControl(controlName: string) {
    return this.registerForm.get(controlName)?.invalid && this.registerForm.get(controlName)?.touched
  }

  hasError(controlName: string, errorName: string) {
    return this.registerForm.get(controlName)?.hasError(errorName)
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'splash', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  private getAllRoles() {
    this.roleService.getAllRoles().subscribe(res => {
      if (res) {
        this.roles = res;
      }
    })
  }
}
