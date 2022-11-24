import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { LayoutEmployeeComponent } from './component/layout-employee/layout-employee.component';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import { UpdateEmployeeComponent } from './component/update-employee/update-employee.component';
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";
import { SetPermissionsComponent } from '../role/components/set-permissions/set-permissions.component';
import {MatCheckboxModule} from "@angular/material/checkbox";


@NgModule({
  declarations: [
    LayoutEmployeeComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    SetPermissionsComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatCheckboxModule
  ]
})
export class EmployeeModule { }
