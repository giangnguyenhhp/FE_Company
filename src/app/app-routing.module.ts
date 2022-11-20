import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./Core/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children:[
      {
        path: 'company',
        loadChildren : () =>import('./company/company.module').then(m=>m.CompanyModule)
      },
      {
        path:'department',
        loadChildren : () =>import('./department/department.module').then(m=>m.DepartmentModule)
      },
      {
        path:'employee',
        loadChildren: () => import('./employee/employee.module').then(m=>m.EmployeeModule)
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
