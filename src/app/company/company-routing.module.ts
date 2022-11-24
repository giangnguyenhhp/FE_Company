import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutCompanyComponent} from "./component/layout-company/layout-company.component";

const routes: Routes = [
  {path: '', component: LayoutCompanyComponent},
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
