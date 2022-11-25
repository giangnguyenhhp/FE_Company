import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutUserComponent} from "./components/layout-user/layout-user.component";

const routes: Routes = [
  {path:'',component:LayoutUserComponent},
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
