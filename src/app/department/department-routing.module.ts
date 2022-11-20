import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutDepartmentComponent} from "./layout-department/layout-department.component";

const routes: Routes = [
  {path:'',component:LayoutDepartmentComponent},
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
