import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginRequest} from "../../models/LoginRequest";
import {LoginService} from "../../Service/login.service";
import {AuthResponse} from "../../models/AuthResponse";
import {Router} from "@angular/router";
import {NgxPermissionsService} from "ngx-permissions";

@Component({
  selector: 'app-layout',
  templateUrl: './layout-login.component.html',
  styleUrls: ['./layout-login.component.scss']
})
export class LayoutLoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  showError!: boolean;
  errorMessage: string='';

  constructor(
    private loginService: LoginService,
    private router : Router,
    private permissionService : NgxPermissionsService
  ) {
  }

  ngOnInit(): void {
  }

  validateControl(controlName: string) {
    return this.loginForm.get(controlName)?.invalid && this.loginForm.get(controlName)?.touched
  }

  hasError(controlName: string, errorName: string) {
    return this.loginForm.get(controlName)?.hasError(errorName)
  }

  loginUser() {
    const userLogin = <LoginRequest>this.loginForm.value
    this.loginService.loginUser(userLogin).subscribe({
      next: (res: AuthResponse) => {

        //Set token và permission vào trong localStorage
        localStorage.setItem('token', res.token);
        localStorage.setItem('permission',res.claims.join(','));

        //Load các permission có sẵn vào NgxPermissionService
        this.permissionService.loadPermissions(res.claims)
        this.loginService.permissions = res.claims
        console.log(res.claims)

        this.router.navigate(['']).then(r => {})
      }
    })
  }
}
