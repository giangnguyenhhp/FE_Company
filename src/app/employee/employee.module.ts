import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { LayoutEmployeeComponent } from './layout-employee/layout-employee.component';
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


@NgModule({
  declarations: [
    LayoutEmployeeComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent
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
        MatListModule
    ]
})
export class EmployeeModule { }
