import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./Core/main-layout/main-layout.component";
import {LoginGuard} from "./Core/Guard/login.guard";
import {RegisterUserComponent} from "./user/components/register-user/register-user.component";
import {NgxPermissionsGuard} from "ngx-permissions";
import {UnauthorizedComponent} from "./Core/unauthorized/unauthorized.component";

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: 'company',
        canActivate: [LoginGuard],
        loadChildren: () => import('./company/company.module').then(m => m.CompanyModule)
      },
      {
        path: 'department',
        canActivate: [LoginGuard],
        loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule)
      },
      {
        path: 'employee',
        canActivate: [LoginGuard],
        loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
      },
      {
        path: 'role',
        canActivate: [LoginGuard, NgxPermissionsGuard],
        loadChildren: () => import('./role/role.module').then(m => m.RoleModule),
        data: {
          permissions: {
            only: 'AdminAccess',
            redirectTo: '/Unauthorized'
          }
        }
      },
      {
        path: 'user',
        canActivate: [LoginGuard, NgxPermissionsGuard],
        loadChildren: () => import('./user/user.module').then(m => m.UserModule),
        data: {
          permissions: {
            only: 'AdminAccess',
            redirectTo: '/Unauthorized'
          }
        }

      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./Core/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register', component: RegisterUserComponent
  },
  {
    path: 'Unauthorized', component: UnauthorizedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
