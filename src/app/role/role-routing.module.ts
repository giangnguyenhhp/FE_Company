import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutRoleComponent } from './components/layout-role/layout-role.component';
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {path:'',component:LayoutRoleComponent},
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
