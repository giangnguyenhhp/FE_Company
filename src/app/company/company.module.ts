import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRoutingModule } from './company-routing.module';
import { LayoutCompanyComponent } from './component/layout-company/layout-company.component';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MaterialModule} from "../material/material.module";
import { CreateCompanyComponent } from './component/create-company/create-company.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import { UpdateCompanyComponent } from './component/update-company/update-company.component';
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";
import {MatExpansionModule} from "@angular/material/expansion";


@NgModule({
  declarations: [
    LayoutCompanyComponent,
    CreateCompanyComponent,
    UpdateCompanyComponent,
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    MaterialModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatListModule,
    MatExpansionModule,
  ]
})
export class CompanyModule { }
