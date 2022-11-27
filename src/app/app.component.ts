import { Component } from '@angular/core';
import {NgxPermissionsService} from "ngx-permissions";
import {LoginService} from "./Core/login/Service/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FE_Company';


  constructor(
    private permissionService: NgxPermissionsService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    const permissions = localStorage.getItem('permission')?.split(',');
    if(permissions) {
      this.permissionService.loadPermissions(permissions)
      this.loginService.permissions = permissions;
      console.log(permissions)
    }
  }
}
