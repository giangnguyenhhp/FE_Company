import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LayoutUserComponent } from './components/layout-user/layout-user.component';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { RegisterUserComponent } from './components/register-user/register-user.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import { RegisterForAdminComponent } from './components/register-for-admin/register-for-admin.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSelectModule} from "@angular/material/select";
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    LayoutUserComponent,
    RegisterUserComponent,
    RegisterForAdminComponent
  ],
    imports: [
        CommonModule,
        UserRoutingModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatButtonToggleModule,
        MatDialogModule,
        MatSelectModule,
        MatSnackBarModule
    ]
})
export class UserModule { }
