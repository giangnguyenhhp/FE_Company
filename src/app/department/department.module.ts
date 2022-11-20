import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { AddDepartmentComponent } from './component/add-department/add-department.component';
import { UpdateDepartmentComponent } from './component/update-department/update-department.component';
import { LayoutDepartmentComponent } from './layout-department/layout-department.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    AddDepartmentComponent,
    UpdateDepartmentComponent,
    LayoutDepartmentComponent
  ],
    imports: [
        CommonModule,
        DepartmentRoutingModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule
    ]
})
export class DepartmentModule { }
