import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegisterUserRequest} from "../../model/RegisterUserRequest";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {
  PasswordConfirmationValidatorService
} from "../../../Core/login/Service/password-confirmation-validator.service";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    confirmPassword: new FormControl('', Validators.required)
  });
  showError: any;
  errorMessage: any;
  constructor(
    private userService: UserService,
    private router: Router,
    private passConfValidator: PasswordConfirmationValidatorService
  ) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.registerForm.get('confirmPassword').setValidators([Validators.required, this.passConfValidator.validateConfirmPassword(this.registerForm.get('password'))]);
  }

  submit() {
    const request = <RegisterUserRequest>this.registerForm.value
    this.userService.registerUser(request).subscribe(res => {
      if (res) {
        this.router.navigate(['/login']).then(() => {
        })
      }
    })
  }

  validateControl(controlName: string) {
    return this.registerForm.get(controlName)?.invalid && this.registerForm.get(controlName)?.touched
  }

  hasError(controlName: string, errorName: string) {
    return this.registerForm.get(controlName)?.hasError(errorName)
  }
}
