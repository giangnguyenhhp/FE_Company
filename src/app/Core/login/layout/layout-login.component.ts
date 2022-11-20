import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginRequest} from "../models/LoginRequest";
import {LoginServiceService} from "../Service/login-service.service";
import {AuthResponse} from "../models/AuthResponse";
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
    private loginService: LoginServiceService,
    private router : Router
  ) {
  }

  ngOnInit(): void {
  }

  loginUser = (loginFormValue: any) => {
    const login = {...loginFormValue};
    const userLogin: LoginRequest = {
      username: login.username,
      password: login.password
    }
    this.loginService.loginUser(userLogin).subscribe({
      next: (res: AuthResponse) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['']).then(r => {})
      }
    })
  }
}
