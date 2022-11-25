import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LayoutLoginComponent } from './Components/layout/layout-login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {RouterModule} from "@angular/router";
import {RegisterUserComponent} from "../../user/components/register-user/register-user.component";


@NgModule({
  declarations: [
    LayoutLoginComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild([
      {path:'register',component:RegisterUserComponent},
      {path:'',component:LayoutLoginComponent}
    ])
  ]
})
export class LoginModule { }
