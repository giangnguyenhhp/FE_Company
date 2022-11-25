import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginRequest} from "../../models/LoginRequest";
import {LoginService} from "../../Service/login.service";
import {AuthResponse} from "../../models/AuthResponse";
import {Router} from "@angular/router";

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

  constructor(
    private loginService: LoginService,
    private router : Router
  ) {
  }

  ngOnInit(): void {
  }

  loginUser() {
    const userLogin = <LoginRequest>this.loginForm.value
    this.loginService.loginUser(userLogin).subscribe({
      next: (res: AuthResponse) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('permission',res.claims.join(','));

        this.router.navigate(['']).then(r => {})
      }
    })
  }
}
