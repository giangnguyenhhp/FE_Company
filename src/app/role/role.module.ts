import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleRoutingModule } from './role-routing.module';
import { LayoutRoleComponent } from './components/layout-role/layout-role.component';
import { MaterialModule } from '../material/material.module';
import {MatSortModule} from "@angular/material/sort";
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import { CreateRoleComponent } from './components/create-role/create-role.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import { UpdateRoleComponent } from './components/update-role/update-role.component';


@NgModule({
  declarations: [
    LayoutRoleComponent,
    CreateRoleComponent,
    UpdateRoleComponent
  ],
  imports: [
    CommonModule,
    RoleRoutingModule,
    MaterialModule,
    MatSortModule,
    FlexModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule,
  ]
})
export class RoleModule { }
