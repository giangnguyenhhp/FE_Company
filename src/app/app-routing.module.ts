import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./Core/main-layout/main-layout.component";
import {LoginGuard} from "./Core/Guard/login.guard";

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate:[LoginGuard],
    children:[
      {
        path: 'company',
        canActivate:[LoginGuard],
        loadChildren : () =>import('./company/company.module').then(m=>m.CompanyModule)
      },
      {
        path:'department',
        canActivate:[LoginGuard],
        loadChildren : () =>import('./department/department.module').then(m=>m.DepartmentModule)
      },
      {
        path:'employee',
        canActivate:[LoginGuard],
        loadChildren: () => import('./employee/employee.module').then(m=>m.EmployeeModule)
      },
      {
        path:'role',
        canActivate:[LoginGuard],
        loadChildren : () => import('./role/role.module').then(m=>m.RoleModule)
      },
      {
        path:'user',
        canActivate:[LoginGuard],
        loadChildren : () => import('./user/user.module').then(m=>m.UserModule)
      }
    ]
  },
  {
    path : 'login',
    loadChildren : () => import('./Core/login/login.module').then(m=>m.LoginModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
