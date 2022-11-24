import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutEmployeeComponent} from "./component/layout-employee/layout-employee.component";

const routes: Routes = [
  {path: '', component:LayoutEmployeeComponent},
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
